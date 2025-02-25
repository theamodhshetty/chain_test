"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react';
import { useToast } from '@/components/ToastProvider';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function About() {
  const { showToast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Message sent successfully!', 'success');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About ChainInsight</h1>
            <p className="text-xl text-blue-100 mb-8">
              Empowering investors with AI-driven analytics and insights for the crypto market
            </p>
            <Button variant="outline" className="bg-white text-blue-800 hover:bg-blue-50">
              Our Mission
            </Button>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600">
                We believe that investing in cryptocurrencies should be powered by data and insights, not hype and emotion. 
                ChainInsight combines cutting-edge AI technology with deep domain expertise to democratize access to sophisticated 
                crypto market analysis.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title="AI-Powered Analysis">
                  <p className="text-gray-600">
                    Our proprietary AI agents continuously analyze market data, on-chain metrics, sentiment, and macro factors to identify opportunities and risks that human analysis might miss.
                  </p>
                </Card>
                <Card title="Research-Backed Insights">
                  <p className="text-gray-600">
                    Every insight is grounded in rigorous research and validated methodologies, combining traditional financial analysis with crypto-native metrics.
                  </p>
                </Card>
                <Card title="User-Focused Design">
                  <p className="text-gray-600">
                    We present complex information in an intuitive, actionable format, allowing investors of all experience levels to make informed decisions.
                  </p>
                </Card>
                <Card title="Continuous Innovation">
                  <p className="text-gray-600">
                    Our platform evolves with the market, constantly integrating new data sources, analysis techniques, and user feedback to improve our insights.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of experts in artificial intelligence, blockchain technology, and financial markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Thompson', role: 'Founder & CEO', bio: 'Former quant trader with 15 years of experience in financial markets.' },
              { name: 'Dr. Maya Patel', role: 'Chief AI Officer', bio: 'PhD in Machine Learning with specialization in NLP and financial modeling.' },
              { name: 'Jason Lee', role: 'Head of Blockchain Research', bio: 'Blockchain developer since 2013, contributor to multiple open-source projects.' },
              { name: 'Sarah Chen', role: 'Head of Product', bio: 'Product leader with expertise in fintech and data visualization platforms.' },
            ].map((member, index) => (
              <Card key={index} className="flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-indigo-600' :
                  index === 1 ? 'from-purple-500 to-pink-600' :
                  index === 2 ? 'from-green-500 to-teal-600' :
                  'from-amber-500 to-orange-600'
                }`}>
                  {member.name.split(' ').map(part => part[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                <div className="flex gap-3 mt-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600" aria-label="LinkedIn profile">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500" aria-label="Twitter profile">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Have questions or want to learn more about ChainInsight? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <Card className="text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <Mail className="h-5 w-5 text-blue-600 mx-auto md:mx-0" />
                      <span className="text-gray-700">info@chaininsight.com</span>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600" aria-label="LinkedIn profile">
                        <LinkedinIcon className="h-6 w-6" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500" aria-label="Twitter profile">
                        <TwitterIcon className="h-6 w-6" />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900" aria-label="GitHub profile">
                        <GithubIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Message subject"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit">
                        Send Message <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 