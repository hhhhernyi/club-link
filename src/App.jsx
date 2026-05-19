import { useState, useCallback, useMemo } from 'react';
import { getAllClubs, pickComputerClub, ROUND_COUNT } from './utils/gameLogic';
import { useGameStats } from './hooks/useGameStats';

import { MenuScreen } from './screens/MenuScreen';
import { PickClubScreen } from './screens/PickClubScreen';
import { CountdownScreen } from './screens/CountdownScreen';
import { GuessScreen } from './screens/GuessScreen';
import { ResultScreen } from './screens/ResultScreen';
import { GameOverScreen } from './screens/GameOverScreen';

const SCREEN = {
  MENU: 'MENU', PICK_CLUB: 'PICK_CLUB', COUNTDOWN: 'COUNTDOWN',
  GUESS: 'GUESS', RESULT: 'RESULT', GAME_OVER: 'GAME_OVER',
};

const initialGameState = {
  round: 1, rounds: [], clubAId: null, clubBId: null, lastResult: null,
};

export default function App() {
  const { stats, recordGame } = useGameStats();
  const [screen, setScreen] = useState(SCREEN.MENU);
  const [game, setGame] = useState(initialGameState);
  const allClubs = useMemo(() => getAllClubs(), []);

  const handlePlay = () => setScreen(SCREEN.PICK_CLUB);

  const handlePickClub = useCallback((clubId) => {
    const computerClub = pickComputerClub(clubId);
    if (!computerClub) { alert('No valid pair found. Try another club!'); return; }
    setGame(prev => ({ ...prev, clubAId: clubId, clubBId: computerClub.id }));
    setScreen(SCREEN.COUNTDOWN);
  }, []);

  const handleCountdownDone = () => setScreen(SCREEN.GUESS);

  const handleResult = useCallback((result) => {
    setGame(prev => ({ ...prev, lastResult: result }));
    setScreen(SCREEN.RESULT);
  }, []);

  const handleNextRoundNav = useCallback(() => {
    setGame(prev => {
      const completedRound = { clubAId: prev.clubAId, clubBId: prev.clubBId, result: prev.lastResult };
      const newRounds = [...prev.rounds, completedRound];
      const newRound = prev.round + 1;
      if (newRound > ROUND_COUNT) {
        recordGame();
        setTimeout(() => setScreen(SCREEN.GAME_OVER), 0);
        return { ...prev, rounds: newRounds };
      }
      setTimeout(() => setScreen(SCREEN.PICK_CLUB), 0);
      return { ...prev, round: newRound, rounds: newRounds, clubAId: null, clubBId: null, lastResult: null };
    });
  }, [recordGame]);

  const handlePlayAgain = () => { setGame(initialGameState); setScreen(SCREEN.PICK_CLUB); };
  const handleMenu = () => { setGame(initialGameState); setScreen(SCREEN.MENU); };

  const roundResults = useMemo(() => {
    const results = Array(ROUND_COUNT).fill(null);
    game.rounds.forEach((r, i) => { results[i] = r.result?.correct ? 'correct' : 'wrong'; });
    if (screen === SCREEN.RESULT && game.lastResult) {
      results[game.round - 1] = game.lastResult.correct ? 'correct' : 'wrong';
    }
    return results;
  }, [game.rounds, game.round, game.lastResult, screen]);

  switch (screen) {
    case SCREEN.MENU:      return <MenuScreen onPlay={handlePlay} stats={stats} />;
    case SCREEN.PICK_CLUB: return <PickClubScreen allClubs={allClubs} round={game.round} totalRounds={ROUND_COUNT} onSelect={handlePickClub} onBack={() => setScreen(game.round === 1 ? SCREEN.MENU : SCREEN.RESULT)} />;
    case SCREEN.COUNTDOWN: return <CountdownScreen clubAId={game.clubAId} clubBId={game.clubBId} onDone={handleCountdownDone} />;
    case SCREEN.GUESS:     return <GuessScreen clubAId={game.clubAId} clubBId={game.clubBId} round={game.round} totalRounds={ROUND_COUNT} roundResults={roundResults} onResult={handleResult} />;
    case SCREEN.RESULT:    return <ResultScreen clubAId={game.clubAId} clubBId={game.clubBId} round={game.round} totalRounds={ROUND_COUNT} roundResults={roundResults} result={game.lastResult} onNext={handleNextRoundNav} />;
    case SCREEN.GAME_OVER: return <GameOverScreen rounds={game.rounds} onPlayAgain={handlePlayAgain} onMenu={handleMenu} />;
    default: return null;
  }
}