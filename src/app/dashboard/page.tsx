"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarChart3, Briefcase, ChevronDown, Clock, CreditCard, DollarSign, ExternalLink, Eye, Globe, LineChart, Plus, RefreshCw, Search, Settings, TrendingDown, TrendingUp, Info, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Demo Mode Banner */}
      <div className="sticky top-16 z-40 w-full bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <p className="text-sm text-amber-800">
            Demo Mode: This is a UI prototype. All features are simulated and buttons are non-functional.
          </p>
        </div>
      </div>

      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <div className="hidden md:flex bg-gray-100 rounded-md">
                <button className="px-4 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-md cursor-not-allowed hover:opacity-90 transition-opacity" title="Demo Mode">Overview</button>
                <button className="px-4 py-1.5 text-sm font-medium text-gray-600 cursor-not-allowed hover:bg-gray-200 transition-colors" title="Demo Mode">Portfolio</button>
                <button className="px-4 py-1.5 text-sm font-medium text-gray-600 cursor-not-allowed hover:bg-gray-200 transition-colors" title="Demo Mode">Insights</button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-not-allowed" title="Demo Mode">
                <RefreshCw className="h-5 w-5" />
              </button>
              <div className="relative group">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-700 cursor-not-allowed" title="Demo Mode">
                  <Briefcase className="h-4 w-4" />
                  <span>Portfolio 1</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="absolute top-full mt-1 right-0 bg-white shadow-md rounded-md p-2 border border-gray-100 hidden group-hover:block z-10">
                  <p className="text-xs text-gray-500 whitespace-nowrap">Demo Feature - Not Active</p>
                </div>
              </div>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-not-allowed" title="Demo Mode">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-3 relative group">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Portfolio Overview</h2>
              <div className="flex items-center gap-3">
                <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 bg-gray-100 rounded-md cursor-not-allowed" title="Demo Mode">7D</button>
                <button className="px-3 py-1.5 text-sm text-white bg-blue-600 rounded-md cursor-not-allowed" title="Demo Mode">30D</button>
                <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 bg-gray-100 rounded-md cursor-not-allowed" title="Demo Mode">90D</button>
                <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 bg-gray-100 rounded-md cursor-not-allowed" title="Demo Mode">1Y</button>
              </div>
            </div>
            
            <div className="h-64 w-full bg-gray-50 rounded-lg flex items-center justify-center">
              {/* Chart placeholder */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="w-full h-full px-6 py-4" viewBox="0 0 320 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                  </defs>
                  {/* Line chart */}
                  <path
                    d="M0,100 L20,90 L40,95 L60,80 L80,85 L100,70 L120,75 L140,60 L160,65 L180,50 L200,55 L220,40 L240,45 L260,30 L280,35 L300,20 L320,25"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  {/* Area fill */}
                  <path
                    d="M0,100 L20,90 L40,95 L60,80 L80,85 L100,70 L120,75 L140,60 L160,65 L180,50 L200,55 L220,40 L240,45 L260,30 L280,35 L300,20 L320,25 L320,140 L0,140 Z"
                    fill="url(#chart-gradient)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-sm text-gray-600">
                    Demo Chart - Simulated Data
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Total Value', value: '$24,350.75', change: '+12.5%', isPositive: true },
                { label: 'Daily Change', value: '+$1,245.43', change: '+5.4%', isPositive: true },
                { label: 'Monthly ROI', value: '+18.2%', change: '+2.3%', isPositive: true },
                { label: 'Risk Score', value: 'Moderate', change: 'Balanced', isPositive: true }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg relative group/stat">
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-xl font-semibold text-gray-900 mb-1">{stat.value}</p>
                  <div className="flex items-center text-sm">
                    {stat.isPositive ? 
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" /> : 
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    }
                    <span className={stat.isPositive ? "text-green-600" : "text-red-600"}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover/stat:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                    <span className="text-xs text-gray-600">Simulated Data</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-6 rounded-xl shadow-sm text-white relative group">
            <h2 className="text-lg font-semibold mb-6">AI Sentiment Index</h2>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Current Market Sentiment</span>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-1">Bullish</span>
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
              </div>
              <div className="w-full bg-blue-800/50 rounded-full h-2.5">
                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-800/20 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-blue-100 mb-2">Warren AI suggests:</p>
                <p className="text-white">Consider accumulating BTC due to strong on-chain fundamentals and institutional interest.</p>
              </div>
              <div className="bg-blue-800/20 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-blue-100 mb-2">Catherine AI suggests:</p>
                <p className="text-white">Focus on Layer-2 scaling solutions as they show promising growth metrics.</p>
              </div>
              <Link href="#" className="flex items-center justify-center w-full py-2 text-sm text-center text-blue-100 hover:text-white rounded-md transition-colors cursor-not-allowed" onClick={(e) => e.preventDefault()}>
                View All Insights <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center backdrop-blur-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
                Demo Feature - AI Agents Not Active
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Assets */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Your Top Assets</h2>
            <Link href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center cursor-not-allowed" onClick={(e) => e.preventDefault()}>
              View All <ChevronDown className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100 relative group">
            <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-white/80 backdrop-blur-sm z-10 transition-all">
              <div className="bg-blue-100 border border-blue-200 text-blue-800 px-4 py-2 rounded-lg">
                Demo Table - Assets Not Connected to Live Data
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">24h</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Holdings</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">AI Score</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { 
                    name: 'Bitcoin', 
                    symbol: 'BTC', 
                    price: '$42,384.21', 
                    change: '+5.24%', 
                    isPositive: true, 
                    holdings: '$12,715.26', 
                    aiScore: 87,
                    iconPath: '/bitcoin.png'
                  },
                  { 
                    name: 'Ethereum', 
                    symbol: 'ETH', 
                    price: '$2,284.53', 
                    change: '+3.76%', 
                    isPositive: true, 
                    holdings: '$6,853.59', 
                    aiScore: 82,
                    iconPath: '/ethereum.png'
                  },
                  { 
                    name: 'Solana', 
                    symbol: 'SOL', 
                    price: '$98.42', 
                    change: '-2.13%', 
                    isPositive: false, 
                    holdings: '$2,460.50', 
                    aiScore: 79,
                    iconPath: '/solana.png'
                  },
                  { 
                    name: 'Chainlink', 
                    symbol: 'LINK', 
                    price: '$14.34', 
                    change: '+7.35%', 
                    isPositive: true, 
                    holdings: '$1,434.00', 
                    aiScore: 85,
                    iconPath: '/chainlink.png'
                  },
                  { 
                    name: 'Polkadot', 
                    symbol: 'DOT', 
                    price: '$5.72', 
                    change: '-0.87%', 
                    isPositive: false, 
                    holdings: '$858.00', 
                    aiScore: 74,
                    iconPath: '/polkadot.png'
                  },
                ].map((asset, index) => (
                  <tr key={index} className="group/row hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-white font-medium ${
                          ['bg-orange-500', 'bg-blue-500', 'bg-purple-500', 'bg-blue-400', 'bg-pink-500'][index % 5]
                        }`}>
                          {asset.symbol.substring(0, 1)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                          <div className="text-sm text-gray-500">{asset.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">{asset.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <span className={`${asset.isPositive ? 'text-green-600' : 'text-red-600'} font-medium`}>
                        {asset.change}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">{asset.holdings}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          asset.aiScore >= 80 ? 'bg-green-100 text-green-800' : 
                          asset.aiScore >= 70 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {asset.aiScore}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-gray-500 hover:text-gray-700 cursor-not-allowed" title="Demo Mode">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 cursor-not-allowed" title="Demo Mode">
                          <CreditCard className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Latest Insights */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Latest AI Insights</h2>
            <Link href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center cursor-not-allowed" onClick={(e) => e.preventDefault()}>
              View All <ChevronDown className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'BTC Fundamental Analysis',
                agent: 'Warren AI',
                description: 'Bitcoin\'s stock-to-flow ratio suggests potential undervaluation. Current on-chain metrics show strong accumulation patterns from long-term holders.',
                time: '2 hours ago',
                score: 92
              },
              {
                title: 'Emerging DeFi Opportunities',
                agent: 'Catherine AI',
                description: 'New DeFi protocols are showing promising innovation in cross-chain liquidity. Consider diversifying your portfolio with these emerging assets.',
                time: '5 hours ago',
                score: 85
              },
              {
                title: 'Market Sentiment Analysis',
                agent: 'Michael AI',
                description: 'Current fear and greed index indicates excessive fear in the market, historically a strong buying opportunity for blue-chip cryptocurrencies.',
                time: '8 hours ago',
                score: 88
              }
            ].map((insight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <BarChart3 className="h-4 w-4" />
                    </div>
                    <h3 className="font-medium text-gray-900">{insight.title}</h3>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
                    {insight.score}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{insight.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{insight.time}</span>
                  </div>
                  <span className="text-blue-600">{insight.agent}</span>
                </div>
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Demo Insight - Not Generated by AI</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 