"use client";

import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, Brain, ChevronDown, Clock, Filter, Search, 
  TrendingUp, Zap, Eye, 
  ShieldAlert,
  Compass,
  DollarSign,
  Hash,
  Lightbulb,
  ArrowRightCircle,
} from 'lucide-react';
import { useToast } from '@/components/ToastProvider';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import AnnouncementBanner from '@/components/DemoBanner';

export default function Insights() {
  const { showToast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Searching for insights...', 'info');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Announcement Banner */}
      <AnnouncementBanner 
        message="AI Agents are now providing real-time market insights!" 
        variant="success" 
      />

      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">AI-Powered Insights</h1>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text" 
                  placeholder="Search insights..." 
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </form>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  icon={<Filter className="h-4 w-4" />}
                >
                  Filter
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="relative"
                >
                  Sort
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Agents Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Your AI Agents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'Warren', 
                role: 'Value Investor', 
                icon: DollarSign,
                active: true,
                color: 'bg-blue-100 text-blue-600',
                insights: 12,
                accuracy: 87
              },
              { 
                name: 'Catherine', 
                role: 'Growth Investor', 
                icon: TrendingUp,
                active: true,
                color: 'bg-green-100 text-green-600',
                insights: 15,
                accuracy: 84
              },
              { 
                name: 'Michael', 
                role: 'Technical Analyst', 
                icon: BarChart3,
                active: true,
                color: 'bg-purple-100 text-purple-600',
                insights: 8,
                accuracy: 81
              },
              { 
                name: 'Satoshi', 
                role: 'On-Chain Analyst', 
                icon: Hash,
                active: false,
                color: 'bg-amber-100 text-amber-600',
                insights: 0,
                accuracy: 0
              },
            ].map((agent, index) => (
              <Card 
                key={index} 
                className="hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full ${agent.color} flex items-center justify-center`}>
                      <agent.icon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900">{agent.name}</h3>
                      <p className="text-sm text-gray-500">{agent.role}</p>
                    </div>
                  </div>
                  <Badge variant={agent.active ? "success" : "danger"} size="sm">
                    {agent.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
                
                {agent.active ? (
                  <>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-xs text-gray-500">Insights</p>
                        <p className="font-medium">{agent.insights}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-xs text-gray-500">Accuracy</p>
                        <p className="font-medium">{agent.accuracy}%</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      icon={<Eye className="h-4 w-4" />}
                    >
                      View Insights
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full" 
                  >
                    Activate Agent
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </section>
        
        {/* Recent Insights */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Insights</h2>
            <Button 
              variant="outline" 
              size="sm"
            >
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Bitcoin showing bullish divergence',
                description: 'Technical indicators suggest a potential reversal pattern forming on BTC. MACD shows positive divergence, while RSI is rebounding from oversold conditions.',
                category: 'Technical',
                confidence: 87,
                timestamp: '2h ago',
                agent: 'Michael',
                tickers: ['BTC']
              },
              {
                title: 'DeFi tokens undervalued relative to TVL',
                description: 'Several DeFi protocols are showing significant value discrepancies when comparing market cap to total value locked (TVL). These tokens may represent buying opportunities.',
                category: 'Fundamental',
                confidence: 82,
                timestamp: '5h ago',
                agent: 'Catherine',
                tickers: ['AAVE', 'UNI', 'CRV']
              },
              {
                title: 'Ethereum L2 adoption accelerating',
                description: 'On-chain metrics show increasing adoption of Ethereum L2 solutions, with transaction counts rising 40% month-over-month. This could drive value to L2 ecosystem tokens.',
                category: 'On-Chain',
                confidence: 91,
                timestamp: '1d ago',
                agent: 'Warren',
                tickers: ['ETH', 'OP', 'ARB']
              },
            ].map((insight, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full"
              >
                <div className="mb-3">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{insight.title}</h3>
                    <Badge 
                      variant={
                        insight.category === 'Technical' ? 'primary' : 
                        insight.category === 'Fundamental' ? 'info' : 
                        insight.category === 'On-Chain' ? 'warning' : 'success'
                      } 
                      size="sm"
                    >
                      {insight.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{insight.description}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {insight.tickers.map((ticker, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                        ${ticker}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{insight.timestamp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{insight.confidence}%</span>
                      <span>by {insight.agent}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      icon={<ArrowRightCircle className="h-4 w-4" />}
                    >
                      Explore Insight
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Market Overview */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Market Overview</h2>
            <div className="flex gap-2">
              <Badge variant="success" size="sm">Bullish</Badge>
              <Badge variant="warning" size="sm">High Volatility</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card 
              title="Market Sentiment" 
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">Fear & Greed Index</h3>
                    <Badge variant="success">67 - Greed</Badge>
                  </div>
                  <ProgressBar value={67} color="success" className="mb-2" />
                  <p className="text-sm text-gray-600">Sentiment is shifting positive, historically a good time to accumulate assets.</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">Institutional Flows</h3>
                    <Badge variant="primary">Bullish</Badge>
                  </div>
                  <ProgressBar value={75} color="primary" className="mb-2" />
                  <p className="text-sm text-gray-600">Institutional investors are accumulating in spot markets and derivatives.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-dashed border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Key Signals</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="h-3 w-3" />
                    </div>
                    <span>Bitcoin spot ETF inflows exceeded $250M for the third consecutive day</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Lightbulb className="h-3 w-3" />
                    </div>
                    <span>Ethereum options market pricing in 40% chance of ETF approval in Q3</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldAlert className="h-3 w-3" />
                    </div>
                    <span>DeFi TVL shows signs of recovery after 3-month decline</span>
                  </li>
                </ul>
              </div>
            </Card>
            
            <Card 
              title="AI Agent Consensus" 
              className="lg:col-span-1"
            >
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">Bitcoin (BTC)</h3>
                    <Badge variant="success" size="sm">Strong Buy</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow">
                      <ProgressBar value={80} color="success" size="sm" />
                    </div>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">3/3 agents bullish</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">Ethereum (ETH)</h3>
                    <Badge variant="success" size="sm">Buy</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow">
                      <ProgressBar value={67} color="success" size="sm" />
                    </div>
                    <span className="text-sm font-medium">67%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">2/3 agents bullish</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">Solana (SOL)</h3>
                    <Badge variant="warning" size="sm">Neutral</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow">
                      <ProgressBar value={50} color="warning" size="sm" />
                    </div>
                    <span className="text-sm font-medium">50%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">1/3 agents bullish</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">DeFi Sector</h3>
                    <Badge variant="success" size="sm">Buy</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow">
                      <ProgressBar value={75} color="success" size="sm" />
                    </div>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">3/3 agents bullish</p>
                </div>
                
                <Button variant="primary" size="sm" className="w-full mt-4">
                  View Full Analysis
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}