"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, Brain, Shield, TrendingUp, Zap, ChevronRight, PieChart, Wallet, Bell } from 'lucide-react';
import { useToast } from '@/components/ToastProvider';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export default function Home() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast('Registration coming soon! Try our demo dashboard instead.', 'info');
  };
  
  const handleViewInsights = (agentType: string) => {
    showToast(`${agentType} insights will be available in your dashboard`, 'info');
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[150%] bg-[url('/grid-pattern.svg')] opacity-10 transform rotate-12"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${isScrolled ? 'opacity-90 translate-y-2' : 'opacity-100'}`}>
              <Badge variant="primary" className="mb-6 py-1.5 px-3">New: Portfolio Management Now Available</Badge>
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  AI-Powered <span className="text-blue-200">Crypto</span> Investing Insights
                </h1>
                <p className="text-xl text-blue-100 max-w-xl">
                  ChainInsight combines powerful AI agents with deep blockchain analytics to provide you with accurate, actionable cryptocurrency investment insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/dashboard" 
                  className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center">
                    Try Demo Dashboard
                  </span>
                </Link>
                <Link 
                  href="/portfolio" 
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 border border-blue-500 hover:border-blue-400 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Explore Portfolio <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-600 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800" />
                  ))}
                </div>
                <span className="text-sm text-blue-200">Joined by 2,500+ investors this month</span>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 ${isScrolled ? 'opacity-90 translate-y-2' : 'opacity-100'}`}>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Pro Dashboard
                  </div>
                  
                  {/* Dashboard tabs */}
                  <div className="flex border-b border-gray-700 mb-4">
                    {['overview', 'portfolio', 'insights'].map((tab) => (
                      <button
                        key={tab}
                        className={`px-4 py-2 text-xs font-medium capitalize ${
                          activeTab === tab 
                            ? 'text-blue-400 border-b-2 border-blue-400' 
                            : 'text-gray-400 hover:text-gray-300'
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center mb-2 bg-gray-800/70 p-3 rounded-lg">
                      <div className="text-white text-sm font-medium">Market Overview</div>
                      <div className="flex gap-2">
                        <div className="bg-blue-500/80 h-6 w-6 rounded flex items-center justify-center">
                          <Bell className="h-3 w-3 text-white" />
                        </div>
                        <div className="bg-gray-700 h-6 w-6 rounded flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/70 h-32 rounded-lg flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 flex items-end justify-center">
                        <svg className="w-full h-full px-4" viewBox="0 0 300 100" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,80 L20,75 L40,60 L60,65 L80,55 L100,45 L120,50 L140,35 L160,45 L180,20 L200,30 L220,15 L240,25 L260,10 L280,15 L300,5"
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="2"
                          />
                          <path
                            d="M0,80 L20,75 L40,60 L60,65 L80,55 L100,45 L120,50 L140,35 L160,45 L180,20 L200,30 L220,15 L240,25 L260,10 L280,15 L300,5 L300,100 L0,100 Z"
                            fill="url(#gradient)"
                          />
                        </svg>
                      </div>
                      <div className="absolute top-2 left-2 text-xs text-blue-300">BTC/USDT</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gray-800/70 rounded p-2">
                        <div className="text-gray-400 text-xs mb-1">Bitcoin</div>
                        <div className="text-blue-400 font-medium">$41,256.78</div>
                        <div className="text-green-400 text-xs">+2.4%</div>
                      </div>
                      <div className="bg-gray-800/70 rounded p-2">
                        <div className="text-gray-400 text-xs mb-1">Ethereum</div>
                        <div className="text-purple-400 font-medium">$2,315.42</div>
                        <div className="text-green-400 text-xs">+3.8%</div>
                      </div>
                      <div className="bg-gray-800/70 rounded p-2">
                        <div className="text-gray-400 text-xs mb-1">Solana</div>
                        <div className="text-amber-400 font-medium">$96.35</div>
                        <div className="text-red-400 text-xs">-0.7%</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/70 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-gray-300 text-xs">AI Insights</div>
                        <div className="text-blue-400 text-xs">View All</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 bg-gray-700/50 p-1.5 rounded">
                          <div className="bg-gradient-to-br from-orange-500 to-amber-600 h-6 w-6 rounded-full flex items-center justify-center">
                            <Zap className="h-3 w-3 text-white" />
                          </div>
                          <div className="text-gray-300 text-xs">BTC breakout expected</div>
                          <div className="ml-auto text-gray-400 text-xs">5m ago</div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-700/50 p-1.5 rounded">
                          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 h-6 w-6 rounded-full flex items-center justify-center">
                            <TrendingUp className="h-3 w-3 text-white" />
                          </div>
                          <div className="text-gray-300 text-xs">ETH undervalued by 15%</div>
                          <div className="ml-auto text-gray-400 text-xs">1h ago</div>
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
      <section id="features" className="py-24 relative">
        <div className="absolute right-0 top-0 w-1/3 h-1/2 bg-blue-50 rounded-bl-full opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-4">Advanced Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powered by Multi-Agent AI</h2>
            <p className="text-xl text-gray-600">
              Our system utilizes multiple specialized AI agents, each with a unique investment philosophy, to provide balanced insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Brain, 
                title: 'Smart Analysis', 
                description: 'Our AI agents analyze on-chain data, market trends, and social sentiment to identify opportunities.',
                action: '/insights'
              },
              { 
                icon: PieChart, 
                title: 'Portfolio Management', 
                description: 'Track, analyze, and optimize your crypto portfolio with our comprehensive management tools.',
                action: '/portfolio'
              },
              { 
                icon: Shield, 
                title: 'Risk Management', 
                description: 'Understand the risks associated with different assets and strategies to protect your investments.',
                action: '/dashboard'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all relative group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <Link 
                    href={feature.action}
                    className="text-blue-600 font-medium inline-flex items-center text-sm hover:text-blue-800 transition-colors"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* AI Agents Section */}
      <section id="agents" className="py-24 bg-gray-50 relative">
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-blue-100 rounded-tr-full opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="info" className="mb-4">AI-Powered</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our AI Agents</h2>
            <p className="text-lg text-gray-600">
              Each of our AI agents specializes in different investment philosophies and analysis techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Warren AI', specialty: 'Value Investing', color: 'blue', description: 'Focuses on fundamentals and intrinsic value to identify undervalued assets.' },
              { name: 'Catherine AI', specialty: 'Innovation Trends', color: 'purple', description: 'Analyzes emerging technologies and disruptive innovations in the crypto space.' },
              { name: 'Michael AI', specialty: 'Market Timing', color: 'green', description: 'Specializes in technical analysis and market cycle identification.' },
              { name: 'Ray AI', specialty: 'Risk Management', color: 'amber', description: 'Assesses market risks and develops hedging strategies to protect capital.' }
            ].map((agent, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl border transition-all hover:translate-y-[-4px] ${
                  index === 0 ? 'border-blue-200' : 
                  index === 1 ? 'border-purple-200' : 
                  index === 2 ? 'border-green-200' : 
                  'border-amber-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center text-white text-xl font-bold"
                    style={{
                      backgroundColor: index === 0 ? 'rgb(59 130 246)' : 
                                      index === 1 ? 'rgb(168 85 247)' : 
                                      index === 2 ? 'rgb(34 197 94)' : 
                                      'rgb(245 158 11)',
                    }}
                  >
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                    <p className="text-sm text-gray-500">{agent.specialty}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 min-h-[60px]">{agent.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
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
                
                <Button 
                  variant={index === 0 ? 'primary' : index === 1 ? 'secondary' : index === 2 ? 'outline' : 'ghost'}
                  size="sm"
                  className="w-full"
                  onClick={() => handleViewInsights(agent.name)}
                >
                  View Insights
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/insights" className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all text-gray-700 font-medium">
              See All AI Insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Portfolio Preview Section - New section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="success" className="mb-4">New Feature</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Advanced Portfolio Management</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Track all your crypto assets in one place with our comprehensive portfolio management system. Monitor performance, analyze asset allocation, and receive AI-powered recommendations.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Real-time performance tracking',
                    'Asset allocation visualization',
                    'Transaction history management',
                    'AI-powered investment suggestions'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-green-100 text-green-600 p-1 mt-0.5">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/portfolio" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                  Explore Portfolio <Wallet className="h-5 w-5 ml-1" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute -right-10 bottom-10 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="border-b border-gray-200 p-4 bg-gray-50 flex justify-between items-center">
                    <div className="font-medium text-gray-900">My Portfolio</div>
                    <Badge variant="primary" size="sm">$32,450.78</Badge>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-gray-500">Total Value</div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">$32,450.78</span>
                        <Badge variant="success" size="sm">+12.4%</Badge>
                      </div>
                    </div>
                    
                    <div className="w-full h-40 bg-gray-50 rounded-lg mb-4 p-4 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-8 border-gray-100 relative">
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <div className="absolute h-1/2 w-full bg-blue-500 top-0"></div>
                          <div className="absolute h-1/4 w-full bg-purple-500 top-1/2"></div>
                          <div className="absolute h-1/4 w-full bg-amber-400 top-3/4"></div>
                        </div>
                      </div>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">BTC - 50%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">ETH - 25%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                          <span className="text-xs text-gray-600">Others - 25%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white font-medium text-xs">BTC</div>
                          <div>
                            <div className="font-medium text-gray-900">Bitcoin</div>
                            <div className="text-xs text-gray-500">0.38 BTC</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">$16,225.39</div>
                          <Badge variant="success" size="sm">+2.4%</Badge>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center text-white font-medium text-xs">ETH</div>
                          <div>
                            <div className="font-medium text-gray-900">Ethereum</div>
                            <div className="text-xs text-gray-500">3.5 ETH</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">$8,112.70</div>
                          <Badge variant="success" size="sm">+3.8%</Badge>
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
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[150%] bg-[url('/grid-pattern.svg')] opacity-10 transform rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up Your Crypto Investments?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-10 text-blue-100">
            Join thousands of investors using ChainInsight to make data-driven investment decisions and optimize their crypto portfolios.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium inline-flex items-center transition-all shadow-lg hover:shadow-xl"
            >
              Explore Dashboard
            </Link>
            <Link 
              href="/portfolio" 
              className="bg-blue-700 text-white hover:bg-blue-600 px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 border border-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              Try Portfolio Features <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="mt-12 pt-12 border-t border-blue-800/30 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-blue-200 text-sm">AI Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Market Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-blue-200 text-sm">Crypto Assets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15K+</div>
                <div className="text-blue-200 text-sm">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
