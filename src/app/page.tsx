"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, Brain, Shield, TrendingUp, Zap, AlertTriangle } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Demo Mode Banner */}
      <div className="sticky top-16 z-40 w-full bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <p className="text-sm text-amber-800">
            Demo Mode: This is a UI prototype. Buttons and features are non-functional.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  AI-Powered Crypto Investing Insights
                </h1>
                <p className="text-xl text-blue-100">
                  ChainInsight combines powerful AI agents with deep blockchain analytics to provide you with accurate, actionable cryptocurrency investment insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Demo Mode: Registration not available');
                  }}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-center relative group"
                >
                  <span className="flex items-center justify-center">
                    Get Started 
                    <span className="absolute -right-2 -top-2 bg-amber-400 text-amber-800 text-xs px-1 py-0.5 rounded-full">
                      DEMO
                    </span>
                  </span>
                </Link>
                <Link 
                  href="/dashboard" 
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2"
                >
                  View Dashboard <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 shadow-xl relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-amber-400 text-amber-800 text-xs px-2 py-0.5 rounded-full">
                    Dashboard Preview
                  </div>
                  
                  {/* Dashboard mockup */}
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="bg-gray-700 h-6 w-24 rounded"></div>
                      <div className="flex gap-2">
                        <div className="bg-blue-500 h-6 w-6 rounded"></div>
                        <div className="bg-gray-700 h-6 w-6 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 h-32 rounded-lg flex items-center justify-center">
                      <svg className="w-full h-full px-4" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <path
                          d="M0,50 L20,45 L40,60 L60,40 L80,45 L100,30 L120,35 L140,25 L160,35 L180,20 L200,30 L220,15 L240,25 L260,10 L280,15 L300,5"
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gray-800 h-16 rounded p-2">
                        <div className="bg-gray-700 h-3 w-12 rounded mb-2"></div>
                        <div className="bg-blue-500 h-5 w-16 rounded"></div>
                      </div>
                      <div className="bg-gray-800 h-16 rounded p-2">
                        <div className="bg-gray-700 h-3 w-12 rounded mb-2"></div>
                        <div className="bg-green-500 h-5 w-12 rounded"></div>
                      </div>
                      <div className="bg-gray-800 h-16 rounded p-2">
                        <div className="bg-gray-700 h-3 w-12 rounded mb-2"></div>
                        <div className="bg-purple-500 h-5 w-14 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-2">
                      <div className="flex justify-between mb-2">
                        <div className="bg-gray-700 h-3 w-24 rounded"></div>
                        <div className="bg-blue-500 h-3 w-12 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-orange-500 h-5 w-5 rounded-full"></div>
                          <div className="bg-gray-700 h-3 w-24 rounded"></div>
                          <div className="ml-auto bg-gray-700 h-3 w-12 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-500 h-5 w-5 rounded-full"></div>
                          <div className="bg-gray-700 h-3 w-20 rounded"></div>
                          <div className="ml-auto bg-gray-700 h-3 w-16 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by Multi-Agent AI</h2>
            <p className="text-xl text-gray-600">
              Our system utilizes multiple specialized AI agents, each with a unique investment philosophy, to provide balanced insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Brain, 
                title: 'Smart Analysis', 
                description: 'Our AI agents analyze on-chain data, market trends, and social sentiment to identify opportunities.'
              },
              { 
                icon: BarChart3, 
                title: 'Data-Driven Insights', 
                description: 'Get clear, actionable investment insights based on comprehensive data analysis.'
              },
              { 
                icon: Shield, 
                title: 'Risk Management', 
                description: 'Understand the risks associated with different assets and strategies to protect your investments.'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all relative group">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg text-blue-700 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-xl transition-opacity">
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded font-medium">Demo Feature</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* AI Agents Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our AI Agents</h2>
            <p className="text-lg text-gray-600 mb-4">
              Each of our AI agents specializes in different investment philosophies and analysis techniques.
            </p>
            <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-sm mb-16">
              <span className="flex items-center gap-1">
                <AlertTriangle className="h-4 w-4" />
                Demonstration Mode - Simulated Agents
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Warren AI', specialty: 'Value Investing', color: 'blue' },
              { name: 'Catherine AI', specialty: 'Innovation Trends', color: 'purple' },
              { name: 'Michael AI', specialty: 'Market Timing', color: 'green' },
              { name: 'Ray AI', specialty: 'Risk Management', color: 'amber' }
            ].map((agent, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-xl border border-${agent.color}-200 hover:border-${agent.color}-400 hover:shadow-md transition-all cursor-not-allowed`}
                style={{
                  borderColor: index === 0 ? 'rgb(191 219 254)' : 
                               index === 1 ? 'rgb(216 180 254)' : 
                               index === 2 ? 'rgb(187 247 208)' : 
                               'rgb(254 215 170)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-10 w-10 rounded-full bg-${agent.color}-100 text-${agent.color}-600 flex items-center justify-center`}
                    style={{
                      backgroundColor: index === 0 ? 'rgb(219 234 254)' : 
                                        index === 1 ? 'rgb(243 232 255)' : 
                                        index === 2 ? 'rgb(220 252 231)' : 
                                        'rgb(254 243 199)',
                      color: index === 0 ? 'rgb(37 99 235)' : 
                             index === 1 ? 'rgb(147 51 234)' : 
                             index === 2 ? 'rgb(22 163 74)' : 
                             'rgb(217 119 6)',
                    }}
                  >
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{agent.name}</h3>
                    <p className="text-sm text-gray-500">{agent.specialty}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${agent.color}-500 rounded-full`} 
                      style={{ 
                        width: `${85 - index * 5}%`,
                        backgroundColor: index === 0 ? 'rgb(59 130 246)' : 
                                          index === 1 ? 'rgb(168 85 247)' : 
                                          index === 2 ? 'rgb(34 197 94)' : 
                                          'rgb(245 158 11)',
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Accuracy Score</span>
                    <span className="font-medium">{85 - index * 5}%</span>
                  </div>
                </div>
                <button 
                  className={`w-full py-2 text-sm border border-${agent.color}-300 text-${agent.color}-700 rounded-md hover:bg-${agent.color}-50 cursor-not-allowed flex items-center justify-center gap-1`}
                  style={{
                    borderColor: index === 0 ? 'rgb(147 197 253)' : 
                                  index === 1 ? 'rgb(216 180 254)' : 
                                  index === 2 ? 'rgb(134 239 172)' : 
                                  'rgb(253 186 116)',
                    color: index === 0 ? 'rgb(29 78 216)' : 
                           index === 1 ? 'rgb(126 34 206)' : 
                           index === 2 ? 'rgb(21 128 61)' : 
                           'rgb(180 83 9)',
                  }}
                  disabled
                  title="Demo Mode - Not Functional"
                >
                  View Insights <AlertTriangle className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Crypto Investments?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-10 text-blue-100">
            Join thousands of investors using ChainInsight to make data-driven investment decisions.
          </p>
          <button 
            className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-medium inline-flex items-center justify-center transition-all gap-2 cursor-not-allowed relative"
            onClick={(e) => {
              e.preventDefault();
              alert('Demo Mode: Registration not available');
            }}
          >
            Get Started Now 
            <div className="absolute -right-2 -top-2 bg-amber-400 text-amber-800 text-xs px-1 py-0.5 rounded-full">
              DEMO
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
