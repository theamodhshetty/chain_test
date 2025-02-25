"use client";

import React from 'react';
import Link from 'next/link';
import { BarChart3, Briefcase, ChevronDown, Clock, CreditCard, ExternalLink, Eye, RefreshCw, Settings, TrendingDown, TrendingUp } from 'lucide-react';
import { useToast } from '@/components/ToastProvider';
import ProgressBar from '@/components/ProgressBar';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Dashboard() {
  const { showToast } = useToast();
  
  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast('Refreshing data...', 'info');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <div className="hidden md:flex bg-gray-100 rounded-md">
                <Button variant="primary" size="sm" className="rounded-l-md rounded-r-none">Overview</Button>
                <Button variant="ghost" size="sm">Portfolio</Button>
                <Button variant="ghost" size="sm">Insights</Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                icon={<RefreshCw className="h-4 w-4" />}
                onClick={handleRefresh}
              >
                Refresh
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                icon={<Settings className="h-4 w-4" />}
              >
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Dashboard Content (2/3 width on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Portfolio Value">
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold">$24,783.65</span>
                  <Badge variant="success" size="sm" icon={<TrendingUp className="h-3 w-3" />}>+2.4%</Badge>
                </div>
                <ProgressBar value={65} className="mt-4" showLabel color="primary" />
              </Card>
              
              <Card title="Profit/Loss (24h)">
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-green-600">+$573.14</span>
                  <Badge variant="success" size="sm" icon={<TrendingUp className="h-3 w-3" />}>+2.1%</Badge>
                </div>
                <ProgressBar value={52} className="mt-4" showLabel color="success" />
              </Card>
              
              <Card title="Active AI Agents">
                <div className="text-2xl font-bold">4/6</div>
                <ProgressBar value={4} max={6} className="mt-4" showLabel color="info" />
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  Manage Agents
                </Button>
              </Card>
            </div>
            
            {/* Chart Section */}
            <Card title="Portfolio Performance">
              <div className="h-80 w-full bg-white border border-gray-200 rounded-lg p-4">
                <svg className="w-full h-full" viewBox="0 0 800 300">
                  {/* Background grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={`horizontal-${i}`}
                      x1="0"
                      y1={i * 60}
                      x2="800"
                      y2={i * 60}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  ))}
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <line
                      key={`vertical-${i}`}
                      x1={i * 100}
                      y1="0"
                      x2={i * 100}
                      y2="240"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Chart line */}
                  <path
                    d="M0,200 L100,180 L200,120 L300,150 L400,80 L500,100 L600,60 L700,40 L800,20"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                  
                  {/* Area under chart line */}
                  <path
                    d="M0,200 L100,180 L200,120 L300,150 L400,80 L500,100 L600,60 L700,40 L800,20 L800,240 L0,240 Z"
                    fill="url(#gradient)"
                    opacity="0.2"
                  />
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Data points */}
                  <circle cx="0" cy="200" r="4" fill="#3b82f6" />
                  <circle cx="100" cy="180" r="4" fill="#3b82f6" />
                  <circle cx="200" cy="120" r="4" fill="#3b82f6" />
                  <circle cx="300" cy="150" r="4" fill="#3b82f6" />
                  <circle cx="400" cy="80" r="4" fill="#3b82f6" />
                  <circle cx="500" cy="100" r="4" fill="#3b82f6" />
                  <circle cx="600" cy="60" r="4" fill="#3b82f6" />
                  <circle cx="700" cy="40" r="4" fill="#3b82f6" />
                  <circle cx="800" cy="20" r="4" fill="#3b82f6" />
                  
                  {/* X-axis labels */}
                  <text x="0" y="260" textAnchor="middle" fill="#6b7280" fontSize="12">Jan</text>
                  <text x="100" y="260" textAnchor="middle" fill="#6b7280" fontSize="12">Feb</text>
                  <text x="200" y="260" textAnchor="middle" fill="#6b7280" fontSize="12">Mar</text>
                  <text x="300" y="260" textAnchor="middle" fill="#6b7280" fontSize="12">Apr</text>
                  <text x="400" y="260" textAnchor="middle" fill="#6b7280" fontSize="12">May</text>
                  <text x="500" y="260" textAnchor="middle" fill="#6b7280" fontSize="12">Jun</text>
                  <text x="600" y="260" textAnchor="middle" fill="#6b7280" fontSize="12">Jul</text>
                  <text x="700" y="260" textAnchor="middle" fill="#6b7280" fontSize="12">Aug</text>
                  <text x="800" y="260" textAnchor="middle" fill="#6b7280" fontSize="12">Sep</text>
                </svg>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">1D</Button>
                  <Button variant="outline" size="sm">1W</Button>
                  <Button variant="primary" size="sm">1M</Button>
                  <Button variant="outline" size="sm">YTD</Button>
                  <Button variant="outline" size="sm">ALL</Button>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Full View
                </Button>
              </div>
            </Card>
            
            {/* Recent Activity */}
            <Card title="Recent Activity">
              <div className="space-y-4">
                {[
                  { asset: 'Bitcoin (BTC)', amount: '+0.025 BTC', usd: '$612.75', time: '2h ago', type: 'buy' },
                  { asset: 'Ethereum (ETH)', amount: '-1.5 ETH', usd: '$3,400.50', time: '6h ago', type: 'sell' },
                  { asset: 'Solana (SOL)', amount: '+12 SOL', usd: '$1,152.00', time: '1d ago', type: 'buy' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${activity.type === 'buy' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {activity.type === 'buy' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      </div>
                      <div>
                        <div className="font-medium">{activity.asset}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {activity.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-medium ${activity.type === 'buy' ? 'text-green-600' : 'text-red-600'}`}>
                        {activity.amount}
                      </div>
                      <div className="text-sm text-gray-500">{activity.usd}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activity
              </Button>
            </Card>
          </div>
          
          {/* Sidebar (1/3 width on large screens) */}
          <div className="space-y-6">
            
            {/* Assets Overview */}
            <Card title="Assets Overview">
              <div className="space-y-4">
                {[
                  { name: 'Bitcoin', ticker: 'BTC', price: '$24,150.75', change: '+1.2%', allocation: 45 },
                  { name: 'Ethereum', ticker: 'ETH', price: '$2,267.53', change: '+3.5%', allocation: 30 },
                  { name: 'Solana', ticker: 'SOL', price: '$96.32', change: '-0.8%', allocation: 15 },
                  { name: 'Cardano', ticker: 'ADA', price: '$0.57', change: '+0.4%', allocation: 10 },
                ].map((asset, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium">
                      {asset.ticker.substring(0, 1)}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium">{asset.name}</span>
                        <span>{asset.price}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-500">{asset.ticker}</span>
                        <span className={asset.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                          {asset.change}
                        </span>
                      </div>
                      <ProgressBar 
                        value={asset.allocation} 
                        size="sm" 
                        color={index === 0 ? 'primary' : index === 1 ? 'info' : index === 2 ? 'warning' : 'success'} 
                        className="mt-2" 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Manage Assets
              </Button>
            </Card>
            
            {/* AI Insights */}
            <Card title="AI Insights">
              <div className="space-y-3">
                {[
                  { title: 'BTC showing bullish divergence', type: 'Technical' },
                  { title: 'ETH staking rewards analysis', type: 'Fundamental' },
                  { title: 'Market sentiment turning positive', type: 'Sentiment' },
                ].map((insight, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="font-medium">{insight.title}</div>
                      <Badge variant={index === 0 ? 'primary' : index === 1 ? 'info' : 'success'} size="sm">
                        {insight.type}
                      </Badge>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-2 text-blue-600" 
                      icon={<Eye className="h-3 w-3" />}
                    >
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
              <Link href="/insights" className="block mt-4">
                <Button variant="primary" className="w-full">
                  View All Insights
                </Button>
              </Link>
            </Card>
            
            {/* Quick Actions */}
            <Card title="Quick Actions">
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="justify-start" 
                  icon={<CreditCard className="h-4 w-4 text-blue-600" />}
                >
                  Deposit
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start" 
                  icon={<Briefcase className="h-4 w-4 text-blue-600" />}
                >
                  Portfolio
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start" 
                  icon={<BarChart3 className="h-4 w-4 text-blue-600" />}
                >
                  Analytics
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start" 
                  icon={<Settings className="h-4 w-4 text-blue-600" />}
                >
                  Settings
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 