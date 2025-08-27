// src/data/teamData.ts
import { TeamCategory, Member } from '../types';

const executivesMembers: Member[] = [
  { id: 'annieP', name: 'Annie', role: 'President', imageUrl: '/images/team/annie.jpg' },
  { id: 'janetV', name: 'Janet', role: 'Vice President', imageUrl: '/images/team/janet.jpg' },
  { id: 'emilyS', name: 'Emily', role: 'Secretary', imageUrl: '/images/team/emily.jpg' },
  { id: 'denzelT', name: 'Denzel', role: 'Treasurer', imageUrl: '/images/team/denzel.jpg' },
  { id: 'kendrewA', name: 'Kendrew', role: 'ARC Delegate', imageUrl: '/images/team/kendrew.jpg' },
  { id: 'sanW', name: 'San', role: 'Welfare Officer', imageUrl: '/images/team/san.jpg' },
];




// --- ALL TEAMS DEFINITION ---
export const allTeams: TeamCategory[] = [
  { name: 'Executives', members: executivesMembers },
];

// --- FILTER BUTTONS ---
export const mainFilterCategories = [
    { id: 'executives', label: 'Executives' },
];

// export const subFilterCategories = []; //probs not needed