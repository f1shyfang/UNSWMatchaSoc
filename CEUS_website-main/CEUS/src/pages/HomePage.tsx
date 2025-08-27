'use client'
// src/pages/HomePage.tsx
import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef
import gsap from 'gsap'; // Import gsap
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Next.js Image component
import Hero from '../components/Hero';
//import ThreeDModels from '../components/ThreeDModels'; // Import 3D models component

// Import images used on the homepage
// Images are now served from public folder
//import introImage1 from '../assets/images/Ceus-Cruise.jpeg';       
//import introImage2 from '../assets/images/Exec ceus fsa.jpeg';       

// Import event data
import { allEventsData } from '../data/eventData';

const HomePage: React.FC = () => {

  // --- GSAP Animation Refs ---
  const heroTitleRef = useRef<HTMLDivElement>(null); // Ref for the main title div
  const heroSubtitleRef = useRef<HTMLDivElement>(null); // Ref for the subtitle div
  // Add more refs here for other elements you want to animate later

  // --- GSAP Animation Effect ---
  useEffect(() => {
    // Ensure both refs are connected before animating
    if (heroTitleRef.current && heroSubtitleRef.current) {
      
      // Create a GSAP timeline for sequenced animations
      // Defaults apply to all tweens in the timeline unless overridden
      const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power2.out' } });

      // Animate title: fade in and slide up slightly from its initial position
      tl.fromTo(heroTitleRef.current, 
        { opacity: 0, y: 20 }, // Start state (opacity 0, slightly lower)
        { opacity: 1, y: 0, delay: 0.3 } // End state (opacity 1, original y, delayed)
      ); 
      
      // Animate subtitle: fade in and slide up, starting slightly after the title animation begins
      tl.fromTo(heroSubtitleRef.current, 
        { opacity: 0, y: 20 }, // Start state
        { opacity: 1, y: 0 }, // End state
        "-=0.6" // Start 0.6s before the previous tween *ends* (overlaps slightly)
      ); 

      // Cleanup function to kill timeline if component unmounts
      // Good practice, especially for more complex animations or components
      return () => {
        tl.kill(); 
      };
    }
  }, []); // Empty dependency array runs this effect only once on mount


  // --- Date Filtering for Upcoming Events ---
  const now = new Date();
  const twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(now.getDate() + 14); // Set the date to 14 days from now

  const upcomingEventsNextTwoWeeks = allEventsData.filter(event => {
    const eventDate = new Date(event.date);
    // Filter events that are between today and two weeks from now
    return eventDate >= now && eventDate <= twoWeeksFromNow;
  });


  // --- Carousel Settings ---
  const eventSettings = {
    dots: true,
    // Set infinite to false if there are fewer events than slides to show to prevent cloning issues
    infinite: upcomingEventsNextTwoWeeks.length > 3,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: upcomingEventsNextTwoWeeks.length > 2,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0, // Start from the first slide
          infinite: upcomingEventsNextTwoWeeks.length > 1,
        }
      }
    ]
  };


  // --- Component Return (JSX) ---
  return (
    <> 
      {/* --- Hero Section --- */}
      <Hero />

      

      {/* --- About Us Section --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Our <span className="text-[#71B340]">Community</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about bringing the authentic matcha experience to UNSW students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white border border-[#71B340]/10 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A7D37A] to-[#71B340] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🍵</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Authentic Matcha</h3>
              <p className="text-gray-600">
                Experience premium ceremonial-grade matcha.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white border border-[#71B340]/10 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A7D37A] to-[#71B340] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🧘</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mindfulness</h3>
              <p className="text-gray-600">
                Learn the ways to find moments of calm in your busy student life.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white border border-[#71B340]/10 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A7D37A] to-[#71B340] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Connect with like-minded students who share your appreciation for matcha and mindfulness.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#A7D37A]/10 to-[#71B340]/10 rounded-2xl p-8 lg:p-12 border border-[#71B340]/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 mb-6">
                  To create a welcoming space where UNSW students can explore matcha and build lasting friendships through shared experiences and learning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#71B340]"></di >
                    <span className="text-gray-900">Cultural appreciation and understanding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#71B340]"></div>
                    <span className="text-gray-900">Stress relief through mindful practices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#71B340]"></div>
                    <span className="text-gray-900">Building inclusive community connections</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block p-6 bg-white rounded-xl shadow-lg border border-[#71B340]/10">
                  <div className="text-4xl font-bold text-[#71B340] mb-2">150+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- Events Section --- */}
      <section className="events-section container mx-auto px-6 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Upcoming Events</h2>
        {/* Check if there are any events in the next two weeks */}
        {upcomingEventsNextTwoWeeks.length > 0 ? (
          <Slider {...eventSettings}>
            {/* Map over the filtered list of events */}
            {upcomingEventsNextTwoWeeks.map(event => (
              <div key={event.id} className="px-4">
                <div className="bg-white rounded-lg shadow-md p-6 border border-green-200">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🍵</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center text-green-800">{event.title}</h3>
                  <p className="text-center text-gray-600 mt-2">{event.date}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          // Display this message if no events are scheduled in the next two weeks
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🍵</span>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              No events scheduled for the next two weeks. Check out our events page for upcoming tea ceremonies and tastings!
            </p>
            <Link href="/events">
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                View All Events
              </button>
            </Link>
          </div>
        )}
      </section>

      {/* --- Features Section --- */}
      <section className="features-section container mx-auto px-6 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-green-200">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🍵</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-800">Japan trip</h3>
            <p className="text-gray-600">
              Experience authentic matcha in Japan
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-green-200">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🧘</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-800">Mindfulness Sessions</h3>
            <p className="text-gray-600">
              Combine meditation practices with matcha preparation for stress relief
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-green-200">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-800">Matcha Exchange</h3>
            <p className="text-gray-600">
              Learn about matcha culture and connect with like-minded students
            </p>
          </div>
        </div>
      </section>

      {/* --- Join Us Section --- */}
      <section className="join-section bg-green-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-800">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to embark on your matcha journey? Become part of our welcoming community 
            and discover the beauty of Japanese tea culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition duration-300">
                Get in Touch
              </button>
            </Link>
            <Link href="/events">
              <button className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition duration-300">
                View Events
              </button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomePage;