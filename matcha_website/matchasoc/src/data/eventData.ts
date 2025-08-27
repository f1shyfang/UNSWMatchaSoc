// src/data/eventData.ts
import { Event } from '../types';

// Helper to create ISO date strings
const createDate = (year: number, month: number, day: number, hour: number = 17, minute: number = 0): string => {
  // Month is 0-indexed in JavaScript Date (0 = January)
  return new Date(year, month - 1, day, hour, minute).toISOString();
};

export const allEventsData: Event[] = [
  // --- UPCOMING EVENTS ---
  {
    id: 'matchaEventUpcoming1',
    title: 'Weekly Matcha Tasting',
    date: createDate(2025, 3, 19), // Every Wednesday
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Join us for our signature weekly event where we explore different grades and origins of matcha.',
    category: 'Regular',
  },
  {
    id: 'matchaEventUpcoming2',
    title: 'Traditional Tea Ceremony Workshop',
    date: createDate(2025, 3, 22), // March 22, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Learn the authentic Japanese tea ceremony with guidance from our experienced practitioners.',
    category: 'Workshop',
  },
  {
    id: 'matchaEventUpcoming3',
    title: 'Matcha & Mindfulness Session',
    date: createDate(2025, 3, 25), // March 25, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Combine meditation practices with matcha preparation for the perfect stress-relief session.',
    category: 'Wellness',
  },
  {
    id: 'matchaEventUpcoming4',
    title: 'Dinner & Drinks',
    date: createDate(2025, 9, 5), // April 5, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Monthly social dinner featuring Japanese cuisine and cultural discussions.',
    category: 'Social',
  },
  {
    id: 'matchaEventUpcoming5',
    title: 'Matcha Latte Art Workshop',
    date: createDate(2025, 9, 12), // April 12, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Learn to create beautiful latte art with matcha and explore modern matcha preparation techniques.',
    category: 'Workshop',
  },
  {
    id: 'matchaEventUpcoming6',
    title: 'Spring Hanami Tea Party',
    date: createDate(2025, 8, 19), // April 19, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Celebrate cherry blossom season with a traditional hanami tea party in the campus gardens.',
    category: 'Cultural',
  },

  // --- PAST EVENTS ---
  {
    id: 'matchaEventPast1',
    title: 'Welcome Tea Ceremony',
    date: createDate(2025, 2, 19), // February 19, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Kicked off the year with a traditional Japanese tea ceremony to welcome new members.',
    category: 'Cultural',
  },
  {
    id: 'matchaEventPast2',
    title: 'Matcha Tasting Workshop',
    date: createDate(2025, 9, 16), // February 26, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Introduced new members to different grades of matcha and proper tasting techniques.',
    category: 'Workshop',
  },
  {
    id: 'matchaEventPast3',
    title: 'Zen Meditation with Matcha',
    date: createDate(2025, 3, 5), // March 5, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'A peaceful meditation session combining traditional Zen practices with matcha preparation.',
    category: 'Wellness',
  },
  {
    id: 'matchaEventPast4',
    title: 'Japanese Calligraphy Workshop',
    date: createDate(2025, 3, 12), // March 12, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Learn the art of Japanese calligraphy while enjoying traditional matcha tea.',
    category: 'Cultural',
  },
  {
    id: 'matchaEventPast5',
    title: 'Matcha Baking Class',
    date: createDate(2025, 3, 19), // March 19, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Discover how to incorporate matcha into delicious baked goods and desserts.',
    category: 'Workshop',
  },
  {
    id: 'matchaEventPast6',
    title: 'Cherry Blossom Viewing',
    date: createDate(2025, 3, 26), // March 26, 2025
    imageUrl: '/images/events/matachaimages.jpg',
    facebookEventLink: '#',
    description: 'Celebrated the arrival of spring with cherry blossom viewing and traditional tea.',
    category: 'Cultural',
  },
];