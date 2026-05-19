import { UNIQUE_PLAYERS } from '../data/players';
import { CLUBS, CLUB_BY_ID } from '../data/clubs';

export function normalizeStr(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
}

export function getSharedPlayers(clubIdA, clubIdB) {
  return UNIQUE_PLAYERS.filter(p =>
    p.clubs.includes(clubIdA) && p.clubs.includes(clubIdB)
  );
}

export function checkGuess(guess, clubIdA, clubIdB) {
  const normalized = normalizeStr(guess);
  if (!normalized) return null;
  const shared = getSharedPlayers(clubIdA, clubIdB);
  return shared.find(p => {
    const playerNorm = normalizeStr(p.name);
    if (playerNorm === normalized) return true;
    const parts = playerNorm.split(' ');
    if (parts[parts.length - 1] === normalized) return true;
    if (parts[0] === normalized) return true;
    return false;
  }) || null;
}

export function pickComputerClub(excludeId) {
  const validClubs = CLUBS.filter(club => {
    if (club.id === excludeId) return false;
    return getSharedPlayers(excludeId, club.id).length > 0;
  });
  if (validClubs.length === 0) return null;
  return validClubs[Math.floor(Math.random() * validClubs.length)];
}

export function getCrestUrl(clubId) {
  const club = CLUB_BY_ID[clubId];
  if (club?.crestId) return `https://crests.football-data.org/${club.crestId}.png`;
  return null;
}

export function getAllClubs() {
  return [...CLUBS].sort((a, b) => a.name.localeCompare(b.name));
}

export { CLUBS, CLUB_BY_ID };

export const ROUND_COUNT = 5;
export const TIMER_SECONDS = 10;