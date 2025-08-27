'use client'
// src/pages/EventsPage.tsx
import React, { useState, useMemo, useEffect, useRef } from 'react';
import EventCard from '../components/EventCard';
import EventFilterButton from '../components/EventFilterButton';
import { allEventsData } from '../data/eventData';
import { Event as EventType } from '../types';
import { FaCalendarAlt, FaFilter, FaClock, FaHistory } from 'react-icons/fa';

const EVENT_CATEGORIES: EventType['category'][] = ['Regular', 'Workshop', 'Wellness', 'Social', 'Cultural', 'Academic', 'Other'];

const EventsPage: React.FC = () => {
  const [upcomingFilter, setUpcomingFilter] = useState<EventType['category'] | 'All'>('All');
  const [pastFilter, setPastFilter] = useState<EventType['category'] | 'All'>('All');
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<'upcoming' | 'past'>('upcoming');
  
  const upcomingSectionRef = useRef<HTMLDivElement>(null);
  const pastSectionRef = useRef<HTMLDivElement>(null);

  // Memoize `now` to prevent re-calculating on every render
  const now = useMemo(() => new Date(), []);

  const upcomingEvents = useMemo(() => {
    return allEventsData
      .filter(event => new Date(event.date) >= now)
      .filter(event => upcomingFilter === 'All' || event.category === upcomingFilter)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [now, upcomingFilter]);

  const pastEvents = useMemo(() => {
    return allEventsData
      .filter(event => new Date(event.date) < now)
      .filter(event => pastFilter === 'All' || event.category === pastFilter)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [now, pastFilter]);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (section: 'upcoming' | 'past') => {
    setActiveSection(section);
    const targetRef = section === 'upcoming' ? upcomingSectionRef : pastSectionRef;
    targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderFilterButtons = (
    currentFilter: EventType['category'] | 'All',
    setFilter: React.Dispatch<React.SetStateAction<EventType['category'] | 'All'>>
  ) => (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
      <EventFilterButton
        label="All"
        isActive={currentFilter === 'All'}
        onClick={() => setFilter('All')}
      />
      {EVENT_CATEGORIES.map(category => {
        const hasEventsInThisCategory = allEventsData.some(event => event.category === category);
        if (!hasEventsInThisCategory) return null;

        return (
          <EventFilterButton
            key={category}
            label={category}
            isActive={currentFilter === category}
            onClick={() => setFilter(category)}
          />
        );
      })}
    </div>
  );

  const renderEventGrid = (events: EventType[], sectionType: 'upcoming' | 'past') => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
              <div className="h-52 sm:h-56 bg-gray-200"></div>
              <div className="p-4 sm:p-5">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (events.length === 0) {
      return (
        <div className="text-center py-16 px-6 bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FaCalendarAlt className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No {sectionType === 'upcoming' ? 'Upcoming' : 'Past'} Events
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            {sectionType === 'upcoming' 
              ? "Check back soon for new events, or follow us on social media for updates!"
              : "No past events to display currently."
            }
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {events.map((event, index) => (
          <div 
            key={`${sectionType}-${event.id}`} 
            className="transform transition-all duration-500 ease-out"
            style={{
              animationDelay: `${index * 50}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-[#11270B] via-[#598B2C] to-[#3C5A14] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <div className="mb-6">
              <FaCalendarAlt className="w-16 h-16 mx-auto mb-4 text-[#71B340]" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
              Events
            </h1>
            <p className="text-xl sm:text-2xl text-[#71B340] max-w-2xl mx-auto">
              Join us for exciting events, workshops, and social gatherings
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => scrollToSection('upcoming')}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeSection === 'upcoming'
                  ? 'border-[#598B2C] text-[#598B2C]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FaClock className="w-4 h-4" />
              <span>Upcoming Events ({upcomingEvents.length})</span>
            </button>
            <button
              onClick={() => scrollToSection('past')}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeSection === 'past'
                  ? 'border-[#598B2C] text-[#598B2C]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FaHistory className="w-4 h-4" />
              <span>Past Events ({pastEvents.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events Section */}
        <section ref={upcomingSectionRef} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#71B340] to-[#669D31] mx-auto rounded-full"></div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FaFilter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">Filter by category:</span>
            </div>
            {renderFilterButtons(upcomingFilter, setUpcomingFilter)}
          </div>
          
          {renderEventGrid(upcomingEvents, 'upcoming')}
        </section>

        {/* Past Events Section */}
        <section ref={pastSectionRef}>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Past Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3C5A14] to-[#11270B] mx-auto rounded-full"></div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FaFilter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">Filter by category:</span>
            </div>
            {renderFilterButtons(pastFilter, setPastFilter)}
          </div>
          
          {renderEventGrid(pastEvents, 'past')}
        </section>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
};

export default EventsPage;