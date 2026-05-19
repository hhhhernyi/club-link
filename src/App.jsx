import { useState, useCallback, useMemo } from 'react';
import { UNIQUE_PLAYERS } from './data/players';
import { getAllClubsFromPlayers, pickComputerClub, ROUND_COUNT } from './utils/gameLogic';
import { useGameStats } from './hooks/useGameStats';

import { MenuScreen } from './screens/MenuScreen';
import { PickClubScreen } from './screens/PickClubScreen';
import { CountdownScreen } from './screens/CountdownScreen';
import { GuessScreen } from './screens/GuessScreen';
import { ResultScreen } from './screens/ResultScreen';
import { GameOverScreen } from './screens/GameOverScreen';

// Screens
const SCREEN = {
  MENU:       'MENU',
  PICK_CLUB:  'PICK_CLUB',
  COUNTDOWN:  'COUNTDOWN',
  GUESS:      'GUESS',
  RESULT:     'RESULT',
  GAME_OVER:  'GAME_OVER',
};

const initialGameState = {
  round: 1,          // 1-indexed
  rounds: [],        // [{ clubA, clubB, result }]
  clubA: null,       // player's chosen club (persists across rounds)
  clubB: null,       // computer's club (changes each round)
  lastResult: null,
};

export default function App() {
  const { stats, recordGame } = useGameStats();
  const [screen, setScreen] = useState(SCREEN.MENU);
  const [game, setGame] = useState(initialGameState);

  const allClubs = useMemo(() => getAllClubsFromPlayers(UNIQUE_PLAYERS), []);

  // ---------- Navigation handlers ----------

  const handlePlay = () => setScreen(SCREEN.PICK_CLUB);

  const handlePickClub = useCallback((club) => {
    const computerClub = pickComputerClub(allClubs, club);
    if (!computerClub) {
      // Fallback: shouldn't happen with full data
      alert('No valid pair found for this club. Try another!');
      return;
    }
    setGame({
      ...initialGameState,
      clubA: club,
      clubB: computerClub,
    });
    setScreen(SCREEN.COUNTDOWN);
  }, [allClubs]);

  const handleCountdownDone = () => setScreen(SCREEN.GUESS);

  const handleResult = useCallback((result) => {
    setGame(prev => ({
      ...prev,
      lastResult: result,
    }));
    setScreen(SCREEN.RESULT);
  }, []);

  const handleNextRound = useCallback(() => {
    setGame(prev => {
      const completedRound = {
        clubA: prev.clubA,
        clubB: prev.clubB,
        result: prev.lastResult,
      };
      const newRounds = [...prev.rounds, completedRound];
      const newRound = prev.round + 1;

      if (newRound > ROUND_COUNT) {
        // Game over — record stats after setting state
        return { ...prev, rounds: newRounds };
      }

      // Pick a new computer club for next round
      const newClubB = pickComputerClub(allClubs, prev.clubA);
      return {
        ...prev,
        round: newRound,
        rounds: newRounds,
        clubB: newClubB,
        lastResult: null,
      };
    });

    setScreen(prev => {
      // We need to check if game is over
      return SCREEN.RESULT; // temporary; handled below
    });
  }, [allClubs]);

  // Actually navigate after state update
  const handleNextRoundNav = useCallback(() => {
    setGame(prev => {
      const completedRound = {
        clubA: prev.clubA,
        clubB: prev.clubB,
        result: prev.lastResult,
      };
      const newRounds = [...prev.rounds, completedRound];
      const newRound = prev.round + 1;

      if (newRound > ROUND_COUNT) {
        recordGame();
        setTimeout(() => setScreen(SCREEN.GAME_OVER), 0);
        return { ...prev, rounds: newRounds };
      }

      const newClubB = pickComputerClub(allClubs, prev.clubA);
      setTimeout(() => setScreen(SCREEN.COUNTDOWN), 0);
      return {
        ...prev,
        round: newRound,
        rounds: newRounds,
        clubB: newClubB,
        lastResult: null,
      };
    });
  }, [allClubs, recordGame]);

  const handlePlayAgain = () => {
    setGame(initialGameState);
    setScreen(SCREEN.PICK_CLUB);
  };

  const handleMenu = () => {
    setGame(initialGameState);
    setScreen(SCREEN.MENU);
  };

  // Build roundResults array for dots: 'correct' | 'wrong' | null
  const roundResults = useMemo(() => {
    const results = Array(ROUND_COUNT).fill(null);
    game.rounds.forEach((r, i) => {
      results[i] = r.result?.correct ? 'correct' : 'wrong';
    });
    // Mark current in-progress round
    if (screen === SCREEN.RESULT && game.lastResult) {
      results[game.round - 1] = game.lastResult.correct ? 'correct' : 'wrong';
    }
    return results;
  }, [game.rounds, game.round, game.lastResult, screen]);

  // ---------- Render ----------

  switch (screen) {
    case SCREEN.MENU:
      return <MenuScreen onPlay={handlePlay} stats={stats} />;

    case SCREEN.PICK_CLUB:
      return (
        <PickClubScreen
          allClubs={allClubs}
          onSelect={handlePickClub}
          onBack={() => setScreen(SCREEN.MENU)}
        />
      );

    case SCREEN.COUNTDOWN:
      return (
        <CountdownScreen
          clubA={game.clubA}
          clubB={game.clubB}
          onDone={handleCountdownDone}
        />
      );

    case SCREEN.GUESS:
      return (
        <GuessScreen
          clubA={game.clubA}
          clubB={game.clubB}
          round={game.round}
          totalRounds={ROUND_COUNT}
          roundResults={roundResults}
          onResult={handleResult}
        />
      );

    case SCREEN.RESULT:
      return (
        <ResultScreen
          clubA={game.clubA}
          clubB={game.clubB}
          round={game.round}
          totalRounds={ROUND_COUNT}
          roundResults={roundResults}
          result={game.lastResult}
          onNext={handleNextRoundNav}
        />
      );

    case SCREEN.GAME_OVER:
      return (
        <GameOverScreen
          rounds={game.rounds}
          onPlayAgain={handlePlayAgain}
          onMenu={handleMenu}
        />
      );

    default:
      return null;
  }
}
