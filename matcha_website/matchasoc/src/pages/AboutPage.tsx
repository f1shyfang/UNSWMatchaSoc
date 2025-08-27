'use client'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRocket, FaUsers, FaGraduationCap, FaHeart, FaIndustry, FaLaptopCode, FaHandshake, FaTrophy } from 'react-icons/fa';

const AboutUsPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    [heroRef.current, missionRef.current, servicesRef.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
              <span className="text-3xl">🍵</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Welcome to UNSW Matcha Society
            </h1>
            <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              A vibrant student community celebrating Japanese tea culture and mindfulness at UNSW. 
              We foster connections through traditional tea ceremonies and cultural exchange.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/team"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Meet Our Team
            </Link>
            <Link
              href="/events"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🍵</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To create a welcoming space where UNSW students can explore Japanese tea culture, practice mindfulness, and build lasting friendships through shared experiences and learning.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🧘</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the premier student society for Japanese tea culture and mindfulness at UNSW, fostering cultural appreciation and providing a peaceful retreat for students in their academic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the UNSW Matcha Society through tea culture, mindfulness and community events.
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tea Ceremonies */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🍵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tea Ceremonies</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Tea ceremonies</li>
                <li>• Matcha preparation workshops</li>
                <li>• Tea etiquette and history</li>
                <li>• Japan Trip</li>
              </ul>
            </div>

            {/* Mindfulness */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🧘</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mindfulness</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Meditation with matcha</li>
                <li>• Calm study sessions</li>
                <li>• Wellness check-ins</li>
                <li>• Stress-relief practices</li>
              </ul>
            </div>

            {/* Social Community */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social Community</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Welcome tastings & trivia</li>
                <li>• Seasonal celebrations</li>
                <li>• Picnics and hanami</li>
                <li>• Inter-society collabs</li>
              </ul>
            </div>

            {/* Welfare & Opportunities */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Welfare & Opportunities</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Community Initiatives</li>
                <li>• Leadership roles</li>
                <li>• Subcommittee positions</li>
                <li>• Volunteer opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Copy */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-green-600 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From a simple idea of sharing a bowl of tea to a thriving student
                community, the UNSW Matcha Society has grown through moments of
                connection, calm, and culture. Here are a few leaves from our story.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-green-700">2024</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-green-700">50+</div>
                  <div className="text-sm text-gray-600">Events hosted</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-green-700">300+</div>
                  <div className="text-sm text-gray-600">Members</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <ol className="relative border-l-2 border-green-200 pl-6 space-y-8">
                <li>
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                  <h4 className="text-xl font-semibold text-gray-900">Society Founded</h4>
                  <p className="text-sm text-gray-600">2025</p>
                  <p className="mt-2 text-gray-700">
                    A small circle of Matcha enthusiasts forms UNSW Matcha Society
                  </p>
                </li>

                <li>
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                  <h4 className="text-xl font-semibold text-gray-900">Weekly Tastings Begin</h4>
                  <p className="text-sm text-gray-600">2025 T3</p>
                  <p className="mt-2 text-gray-700">
                    Regular matcha tastings become a campus ritual—exploring grades,
                    whisking techniques, and origin stories.
                  </p>
                </li>
                <li>
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                  <h4 className="text-xl font-semibold text-gray-900">Picnic</h4>
                  <p className="text-sm text-gray-600">2025 Spring</p>
                  <p className="mt-2 text-gray-700">
                    We celebrate the season with botanctic garden walk.
                  </p>
                </li>
                <li>
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                  <h4 className="text-xl font-semibold text-gray-900">Cultural Partnerships</h4>
                  <p className="text-sm text-gray-600">Ongoing</p>
                  <p className="mt-2 text-gray-700">
                    Collaborations with language, culture, and wellbeing groups help
                    us share matcha beyond the teahouse.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Be Part of UNSW Matcha Society?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join us to explore Japanese tea culture, practice mindfulness, and connect with a friendly community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
            <Link
              href="/events"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUsPage;
   