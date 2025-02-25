"use client";

import React from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Mode Banner */}
      <div className="sticky top-16 z-40 w-full bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <p className="text-sm text-amber-800">
            Demo Mode: This is a UI prototype. Contact forms and links are non-functional.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About ChainInsight</h1>
            <p className="text-xl text-blue-100 mb-8">
              Empowering investors with AI-driven analytics and insights for the crypto market
            </p>
            <div className="inline-flex px-4 py-2 text-sm text-blue-800 bg-white rounded-md font-medium items-center cursor-not-allowed relative group">
              Our Mission
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-white/80 text-blue-800 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                Demo Mode
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                At ChainInsight, we envision a future where crypto investing is accessible, informed, and driven by cutting-edge AI analysis. We&apos;re building the bridge between complex blockchain data and actionable insights.
              </p>
              <p className="text-lg text-gray-600">
                By combining the power of artificial intelligence with deep crypto market expertise, we aim to democratize access to sophisticated investment strategies that were once exclusive to institutions and wealth management firms.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Analysis</h3>
                  <p className="text-gray-600">
                    Our proprietary AI agents continuously analyze market data, on-chain metrics, sentiment, and macro factors to identify opportunities and risks that human analysis might miss.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Research-Backed Insights</h3>
                  <p className="text-gray-600">
                    Every insight is grounded in rigorous research and validated methodologies, combining traditional financial analysis with crypto-native metrics.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">User-Focused Design</h3>
                  <p className="text-gray-600">
                    We present complex information in an intuitive, actionable format, allowing investors of all experience levels to make informed decisions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Innovation</h3>
                  <p className="text-gray-600">
                    Our platform evolves with the market, constantly integrating new data sources, analysis techniques, and user feedback to improve our insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Our Team</h2>
            <p className="text-gray-600 mb-12 text-center">
              Experts in AI, blockchain technology, and financial markets
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Alex Chen',
                  role: 'Founder & CEO',
                  bio: 'Former quant trader with 10+ years experience in financial markets and AI research.',
                  initial: 'AC'
                },
                {
                  name: 'Sarah Williams',
                  role: 'Chief AI Officer',
                  bio: 'PhD in Machine Learning with expertise in natural language processing and predictive analytics.',
                  initial: 'SW'
                },
                {
                  name: 'Michael Rodriguez',
                  role: 'Head of Blockchain Research',
                  bio: 'Early crypto adopter and researcher specializing in on-chain analytics and protocol design.',
                  initial: 'MR'
                },
                {
                  name: 'Jennifer Zhao',
                  role: 'Product Lead',
                  bio: 'Former product manager at major fintech companies with focus on user-centered design.',
                  initial: 'JZ'
                },
                {
                  name: 'David Kumar',
                  role: 'Chief Strategy Officer',
                  bio: 'Background in traditional finance and investment strategy with expertise in crypto markets.',
                  initial: 'DK'
                },
                {
                  name: 'Lisa Park',
                  role: 'Head of Data Science',
                  bio: 'Specialist in big data analytics and developing financial forecasting models.',
                  initial: 'LP'
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className={`h-24 w-24 mx-auto rounded-full flex items-center justify-center text-xl font-medium text-white mb-4 ${
                    ['bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-green-500', 'bg-pink-500', 'bg-teal-500'][index % 6]
                  }`}>
                    {member.initial}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-blue-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 italic mb-2">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mr-2">
                  !
                </span>
                Team profiles are for demonstration purposes only
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              Demo Form - Not Functional
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed bg-gray-50" 
                  placeholder="Your name"
                  disabled
                  aria-label="Name input disabled in demo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed bg-gray-50" 
                  placeholder="Your email"
                  disabled
                  aria-label="Email input disabled in demo"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed bg-gray-50" 
                  placeholder="Your message"
                  disabled
                  aria-label="Message input disabled in demo"
                ></textarea>
              </div>
              <div>
                <button 
                  type="button" 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-not-allowed opacity-80"
                  disabled
                  aria-label="Send button disabled in demo"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 