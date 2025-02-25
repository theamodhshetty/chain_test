"use client";

import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, Brain, ChevronDown, Clock, Filter, LineChart, Search, 
  TrendingUp, Zap, InfoIcon, ArrowUpRight, Eye, BookmarkIcon, Share2,
  ShieldAlert,
  Compass,
  DollarSign,
  Hash,
  Lightbulb,
  ArrowRightCircle,
  AlertTriangle
} from 'lucide-react';

export default function Insights() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Mode Banner */}
      <div className="sticky top-16 z-40 w-full bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <p className="text-sm text-amber-800">
            Demo Mode: AI Agents are not functional. This is a UI prototype only.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-2xl font-bold text-gray-900">AI Insights</h1>
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-not-allowed" 
              placeholder="Search insights..." 
              disabled
              aria-label="Search is disabled in demo mode"
              title="Search is disabled in demo mode"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
              Demo Mode
            </div>
          </div>
        </div>
        
        {/* AI Agents Filter */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-600" /> 
            Filter by AI Agent
            <span className="text-xs text-blue-600 px-2 py-0.5 bg-blue-100 rounded-full ml-2">Demo</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Warren AI', specialty: 'Value Investing', icon: <BarChart3 className="h-5 w-5" /> },
              { name: 'Catherine AI', specialty: 'Innovation Trends', icon: <TrendingUp className="h-5 w-5" /> },
              { name: 'Michael AI', specialty: 'Market Timing', icon: <Zap className="h-5 w-5" /> },
              { name: 'Ray AI', specialty: 'Risk Management', icon: <ShieldAlert className="h-5 w-5" /> }
            ].map((agent, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-not-allowed relative group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-blue-100 text-blue-600' : 
                      index === 1 ? 'bg-purple-100 text-purple-600' :
                      index === 2 ? 'bg-green-100 text-green-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      {agent.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{agent.name}</h3>
                      <p className="text-sm text-gray-500">{agent.specialty}</p>
                    </div>
                  </div>
                  <div className={`h-3 w-3 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                </div>
                <div className="mt-3 flex justify-end">
                  <span className="text-xs text-gray-400">62 insights generated</span>
                </div>
                <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">Demo Agent - Not Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Latest Insights */}
        <div className="mb-10">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" /> 
            Latest Insights
            <span className="text-xs text-amber-600 px-2 py-0.5 bg-amber-100 rounded-full ml-2">Simulated</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'Bitcoin Accumulation Patterns Suggest Bullish Momentum',
                description: 'On-chain analysis shows strong accumulation from long-term holders despite recent market volatility. Historical patterns indicate potential upside in the next 30-45 days.',
                agent: 'Warren AI',
                score: 92,
                time: '2 hours ago',
                tags: ['BTC', 'On-Chain', 'Accumulation']
              },
              {
                title: 'Layer-2 Projects Show Promising Growth Metrics',
                description: 'Transaction volumes on Ethereum L2 solutions have increased by 327% over the past quarter. Both Arbitrum and Optimism are showing strong developer activity and increasing TVL.',
                agent: 'Catherine AI',
                score: 88,
                time: '5 hours ago',
                tags: ['L2', 'Scaling', 'ETH']
              },
              {
                title: 'Market Sentiment Analysis: Fear & Greed Index',
                description: 'Current market sentiment registers at "Extreme Fear" (22/100), historically a strong counter-indicator and potential buying opportunity for long-term positions.',
                agent: 'Michael AI',
                score: 85,
                time: '8 hours ago',
                tags: ['Sentiment', 'Fear & Greed', 'Counter-Trading']
              }
            ].map((insight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all relative group">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <h3 className="font-medium text-gray-900">{insight.title}</h3>
                      <span className={`shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        insight.score >= 90 ? 'bg-green-100 text-green-800' : 
                        insight.score >= 80 ? 'bg-blue-100 text-blue-800' : 
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {insight.score}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{insight.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {insight.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{insight.time}</span>
                    <span className="text-sm font-medium text-blue-600">{insight.agent}</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center cursor-not-allowed" title="Demo Mode">
                      Read Analysis <ArrowRightCircle className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl">
                  <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                    This is a simulated insight (Demo Mode)
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2 px-4 py-2 border border-blue-300 rounded-md bg-white cursor-not-allowed" title="Demo Mode">
              Load More Insights <AlertTriangle className="h-3 w-3 text-amber-500" />
            </button>
          </div>
        </div>
        
        {/* Explore Insights */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Compass className="h-5 w-5 text-purple-600" />
            Explore Insights by Category
            <span className="text-xs text-purple-600 px-2 py-0.5 bg-purple-100 rounded-full ml-2">Demo Categories</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Market Analysis', count: 247, icon: <BarChart3 className="h-6 w-6 text-blue-500" />, color: 'blue' },
              { name: 'DeFi Opportunities', count: 142, icon: <DollarSign className="h-6 w-6 text-green-500" />, color: 'green' },
              { name: 'Technical Analysis', count: 194, icon: <Hash className="h-6 w-6 text-purple-500" />, color: 'purple' },
              { name: 'Risk Assessment', count: 118, icon: <ShieldAlert className="h-6 w-6 text-red-500" />, color: 'red' }
            ].map((category, index) => (
              <div 
                key={index} 
                className={`bg-${category.color}-50 p-5 rounded-xl border border-${category.color}-100 hover:border-${category.color}-300 hover:shadow-md transition-all relative group cursor-not-allowed`}
                style={{
                  background: index === 0 ? 'rgb(239 246 255)' : 
                             index === 1 ? 'rgb(240 253 244)' : 
                             index === 2 ? 'rgb(243 232 255)' : 
                             'rgb(254 242 242)',
                  borderColor: index === 0 ? 'rgb(191 219 254)' : 
                               index === 1 ? 'rgb(187 247 208)' : 
                               index === 2 ? 'rgb(216 180 254)' : 
                               'rgb(254 202 202)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {category.icon}
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{category.count}</p>
                    <p className="text-sm text-gray-500">insights available</p>
                  </div>
                  <ArrowRightCircle className={`h-6 w-6 text-${category.color}-500`} style={{
                    color: index === 0 ? 'rgb(59 130 246)' : 
                            index === 1 ? 'rgb(34 197 94)' : 
                            index === 2 ? 'rgb(168 85 247)' : 
                            'rgb(239 68 68)',
                  }} />
                </div>
                <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl">
                  <span className="px-3 py-1 bg-gray-800 text-white rounded-lg text-sm">Demo Category</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}