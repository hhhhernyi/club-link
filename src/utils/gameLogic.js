import { UNIQUE_PLAYERS } from '../data/players';

/**
 * Normalize a string for accent-insensitive comparison.
 * "Özil" → "ozil", "Navas" → "navas"
 */
export function normalizeStr(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics
    .replace(/[^a-z0-9\s]/g, '')     // strip non-alphanumeric
    .trim();
}

/**
 * Given two club names, return all players who played for both.
 */
export function getSharedPlayers(clubA, clubB) {
  return UNIQUE_PLAYERS.filter(p =>
    p.clubs.includes(clubA) && p.clubs.includes(clubB)
  );
}

/**
 * Check whether a user's guess matches any player who played for both clubs.
 * Returns the matched player object or null.
 */
export function checkGuess(guess, clubA, clubB) {
  const normalized = normalizeStr(guess);
  if (!normalized) return null;
  const shared = getSharedPlayers(clubA, clubB);
  return shared.find(p => {
    const playerNorm = normalizeStr(p.name);
    // Full name match
    if (playerNorm === normalized) return true;
    // Last name match (e.g., "Henry" matches "Thierry Henry")
    const parts = playerNorm.split(' ');
    const lastName = parts[parts.length - 1];
    if (lastName === normalized) return true;
    // First name match
    if (parts[0] === normalized) return true;
    return false;
  }) || null;
}

/**
 * Pick a random club from the list, excluding a specific club.
 */
export function pickRandomClub(allClubs, excluding) {
  const pool = allClubs.filter(c => c !== excluding);
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Pick a random computer club that has at least one shared player with playerClub.
 */
export function pickComputerClub(allClubs, playerClub) {
  const validClubs = allClubs.filter(club => {
    if (club === playerClub) return false;
    return getSharedPlayers(playerClub, club).length > 0;
  });
  if (validClubs.length === 0) return null;
  return validClubs[Math.floor(Math.random() * validClubs.length)];
}

/**
 * Get the crest URL for a club, with a fallback.
 */
export function getCrestUrl(clubMeta, clubName) {
  const meta = clubMeta[clubName];
  if (meta?.crestId) {
    return `https://crests.football-data.org/${meta.crestId}.png`;
  }
  return null;
}

export const ROUND_COUNT = 5;
export const TIMER_SECONDS = 10;

/**
 * Build a sorted array of all clubs that appear in player data.
 */
export function getAllClubsFromPlayers(players) {
  const clubs = new Set();
  players.forEach(p => p.clubs.forEach(c => clubs.add(c)));
  return Array.from(clubs).sort();
}
