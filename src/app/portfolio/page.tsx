"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, BarChart2, PieChart, ArrowUpRight, ArrowDownRight, RefreshCw, Plus, Filter, Download } from 'lucide-react';
import { useToast } from '@/components/ToastProvider';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import AnnouncementBanner from '@/components/DemoBanner';
import PriceTracker from '@/components/PriceTracker';
import Watchlist from '@/components/Watchlist';

// Mock portfolio data
const mockPortfolioData = {
  totalValue: 24680.42,
  dayChange: 3.2,
  weekChange: -1.8,
  monthChange: 12.5,
  allTimeProfit: 7840.23,
  allTimeProfitPercentage: 46.5,
  assets: [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', amount: 0.42, value: 17715.92, allocation: 71.8, profitLoss: 4325.12, profitLossPercentage: 32.3, avgBuyPrice: 31882.38, currentPrice: 42180.75 },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', amount: 2.85, value: 6698.70, allocation: 27.1, profitLoss: 2124.77, profitLossPercentage: 46.4, avgBuyPrice: 1604.89, currentPrice: 2350.42 },
    { id: 'solana', name: 'Solana', symbol: 'SOL', amount: 2.75, value: 264.88, allocation: 1.1, profitLoss: -42.35, profitLossPercentage: -13.8, avgBuyPrice: 111.72, currentPrice: 96.32 }
  ],
  recentTransactions: [
    { id: 1, type: 'buy', asset: 'Bitcoin', symbol: 'BTC', amount: 0.12, price: 41230.45, value: 4947.65, date: '2023-09-15T10:23:45Z' },
    { id: 2, type: 'sell', asset: 'Ethereum', symbol: 'ETH', amount: 0.5, price: 2342.12, value: 1171.06, date: '2023-08-22T14:12:32Z' },
    { id: 3, type: 'buy', asset: 'Solana', symbol: 'SOL', amount: 2.75, price: 111.72, value: 307.23, date: '2023-07-18T09:45:21Z' },
    { id: 4, type: 'buy', asset: 'Ethereum', symbol: 'ETH', amount: 1.25, price: 1562.30, value: 1952.88, date: '2023-06-05T16:33:10Z' },
    { id: 5, type: 'buy', asset: 'Bitcoin', symbol: 'BTC', amount: 0.3, price: 38256.78, value: 11477.03, date: '2023-05-12T11:05:43Z' }
  ]
};

// Mock chart data points for portfolio performance
const mockChartData = [
  { date: 'Jan', value: 18500 },
  { date: 'Feb', value: 17200 },
  { date: 'Mar', value: 19800 },
  { date: 'Apr', value: 21500 },
  { date: 'May', value: 20700 },
  { date: 'Jun', value: 22300 },
  { date: 'Jul', value: 23100 },
  { date: 'Aug', value: 22800 },
  { date: 'Sep', value: 23900 },
  { date: 'Oct', value: 24680 }
];

export default function Portfolio() {
  const { showToast } = useToast();
  const [activeTimeframe, setActiveTimeframe] = useState<'1d' | '1w' | '1m' | '1y' | 'all'>('1m');
  const [portfolioData, setPortfolioData] = useState(mockPortfolioData);
  const [showAddAssetForm, setShowAddAssetForm] = useState(false);
  const [newAsset, setNewAsset] = useState({ asset: '', amount: '' });
  
  // Handle refresh portfolio data
  const handleRefresh = () => {
    showToast('Refreshing portfolio data...', 'info');
    
    // Simulate data refresh with slight variations
    setTimeout(() => {
      setPortfolioData(prev => ({
        ...prev,
        totalValue: prev.totalValue * (1 + (Math.random() * 0.02 - 0.01)),
        dayChange: prev.dayChange + (Math.random() * 1 - 0.5),
        assets: prev.assets.map(asset => ({
          ...asset,
          value: asset.value * (1 + (Math.random() * 0.04 - 0.02)),
          currentPrice: asset.currentPrice * (1 + (Math.random() * 0.03 - 0.015)),
          profitLoss: asset.profitLoss * (1 + (Math.random() * 0.05 - 0.025)),
          profitLossPercentage: asset.profitLossPercentage * (1 + (Math.random() * 0.04 - 0.02)),
        }))
      }));
      showToast('Portfolio data updated', 'success');
    }, 1500);
  };

  // Handle add new asset
  const handleAddAsset = () => {
    if (!newAsset.asset || !newAsset.amount || isNaN(Number(newAsset.amount))) {
      showToast('Please enter a valid asset and amount', 'warning');
      return;
    }

    showToast(`${newAsset.asset} added to your portfolio`, 'success');
    setShowAddAssetForm(false);
    setNewAsset({ asset: '', amount: '' });
  };

  // Format currency values
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <AnnouncementBanner 
        message="Portfolio tracking is now available! Track your crypto investments in one place." 
        variant="success"
      />
      
      {/* Portfolio Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
              <p className="text-gray-500 mt-1">Track and manage your crypto investments</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                icon={<Download className="h-4 w-4" />}
                onClick={() => showToast('Portfolio report downloaded', 'success')}
              >
                Export
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                icon={<RefreshCw className="h-4 w-4" />}
                onClick={handleRefresh}
              >
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content (Portfolio Overview + Asset List) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Portfolio Overview */}
            <Card>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="font-bold text-gray-700 mb-1">Total Portfolio Value</h2>
                  <div className="text-3xl font-bold text-gray-900">{formatCurrency(portfolioData.totalValue)}</div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={portfolioData.dayChange >= 0 ? 'success' : 'danger'}
                      icon={portfolioData.dayChange >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    >
                      {portfolioData.dayChange >= 0 ? '+' : ''}{portfolioData.dayChange.toFixed(2)}% today
                    </Badge>
                    <Badge 
                      variant={portfolioData.allTimeProfitPercentage >= 0 ? 'success' : 'danger'}
                      icon={portfolioData.allTimeProfitPercentage >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    >
                      All time: {portfolioData.allTimeProfitPercentage >= 0 ? '+' : ''}{portfolioData.allTimeProfitPercentage.toFixed(1)}%
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    All time profit: {formatCurrency(portfolioData.allTimeProfit)}
                  </div>
                </div>
              </div>
              
              {/* Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">Performance</h3>
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    {(['1d', '1w', '1m', '1y', 'all'] as const).map(timeframe => (
                      <button
                        key={timeframe}
                        className={`px-3 py-1 text-xs font-medium rounded-md ${
                          activeTimeframe === timeframe 
                            ? 'bg-white text-blue-700 shadow-sm' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        onClick={() => setActiveTimeframe(timeframe)}
                      >
                        {timeframe.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="h-64 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                  {/* Chart placeholder - would be replaced with an actual chart component */}
                  <svg className="w-full h-full px-4" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path
                      d="M0,70 L30,65 L60,55 L90,58 L120,50 L150,48 L180,40 L210,38 L240,32 L270,28 L300,20"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,70 L30,65 L60,55 L90,58 L120,50 L150,48 L180,40 L210,38 L240,32 L270,28 L300,20"
                      fill="url(#gradientBlue)"
                      fillOpacity="0.1"
                    />
                    <defs>
                      <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Day Change', value: `${portfolioData.dayChange >= 0 ? '+' : ''}${portfolioData.dayChange.toFixed(2)}%`, positive: portfolioData.dayChange >= 0 },
                  { label: 'Week Change', value: `${portfolioData.weekChange >= 0 ? '+' : ''}${portfolioData.weekChange.toFixed(2)}%`, positive: portfolioData.weekChange >= 0 },
                  { label: 'Month Change', value: `${portfolioData.monthChange >= 0 ? '+' : ''}${portfolioData.monthChange.toFixed(2)}%`, positive: portfolioData.monthChange >= 0 },
                  { label: 'Total ROI', value: `${portfolioData.allTimeProfitPercentage >= 0 ? '+' : ''}${portfolioData.allTimeProfitPercentage.toFixed(1)}%`, positive: portfolioData.allTimeProfitPercentage >= 0 }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                    <p className={`text-lg font-bold ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Asset List */}
            <Card title={
              <div className="flex justify-between items-center">
                <span>My Assets</span>
                <Button 
                  variant="primary" 
                  size="sm" 
                  icon={<Plus className="h-4 w-4" />}
                  onClick={() => setShowAddAssetForm(true)}
                >
                  Add Asset
                </Button>
              </div>
            }>
              {/* Add Asset Form */}
              {showAddAssetForm && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Add New Asset</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="asset" className="block text-sm font-medium text-gray-700 mb-1">
                        Asset
                      </label>
                      <select
                        id="asset"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newAsset.asset}
                        onChange={(e) => setNewAsset(prev => ({ ...prev, asset: e.target.value }))}
                      >
                        <option value="">Select cryptocurrency</option>
                        <option value="Bitcoin">Bitcoin (BTC)</option>
                        <option value="Ethereum">Ethereum (ETH)</option>
                        <option value="Solana">Solana (SOL)</option>
                        <option value="Cardano">Cardano (ADA)</option>
                        <option value="Polkadot">Polkadot (DOT)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Amount
                      </label>
                      <input
                        type="text"
                        id="amount"
                        placeholder="0.00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newAsset.amount}
                        onChange={(e) => setNewAsset(prev => ({ ...prev, amount: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowAddAssetForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      onClick={handleAddAsset}
                    >
                      Add Asset
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Asset Table */}
              <div className="overflow-x-auto -mx-4 sm:-mx-6">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="px-4 sm:px-6 py-3">Asset</th>
                      <th className="px-4 sm:px-6 py-3">Holdings</th>
                      <th className="px-4 sm:px-6 py-3">Avg. Buy Price</th>
                      <th className="px-4 sm:px-6 py-3">Current Price</th>
                      <th className="px-4 sm:px-6 py-3">Value</th>
                      <th className="px-4 sm:px-6 py-3">Profit/Loss</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {portfolioData.assets.map((asset) => (
                      <tr 
                        key={asset.id} 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => showToast(`${asset.name} details view coming soon`, 'info')}
                      >
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white text-xs mr-3">
                              {asset.symbol}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{asset.name}</div>
                              <div className="text-gray-500 text-xs">{asset.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">{asset.amount} {asset.symbol}</div>
                          <div className="text-xs text-gray-500">{asset.allocation.toFixed(1)}% of portfolio</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">${asset.avgBuyPrice.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">${asset.currentPrice.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">{formatCurrency(asset.value)}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className={`font-medium ${asset.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {asset.profitLoss >= 0 ? '+' : ''}{formatCurrency(asset.profitLoss)}
                          </div>
                          <div className={`text-xs ${asset.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {asset.profitLossPercentage >= 0 ? '+' : ''}{asset.profitLossPercentage.toFixed(2)}%
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            
            {/* Recent Transactions */}
            <Card title="Recent Transactions">
              <div className="overflow-x-auto -mx-4 sm:-mx-6">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="px-4 sm:px-6 py-3">Type</th>
                      <th className="px-4 sm:px-6 py-3">Asset</th>
                      <th className="px-4 sm:px-6 py-3">Amount</th>
                      <th className="px-4 sm:px-6 py-3">Price</th>
                      <th className="px-4 sm:px-6 py-3">Value</th>
                      <th className="px-4 sm:px-6 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {portfolioData.recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <Badge 
                            variant={transaction.type === 'buy' ? 'success' : 'danger'} 
                            size="sm"
                          >
                            {transaction.type === 'buy' ? 'Buy' : 'Sell'}
                          </Badge>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{transaction.asset}</div>
                          <div className="text-gray-500 text-xs">{transaction.symbol}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          {transaction.amount} {transaction.symbol}
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          ${transaction.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-medium">
                          {formatCurrency(transaction.value)}
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-500">
                          {new Date(transaction.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => showToast('Transaction history view coming soon', 'info')}
                >
                  View All Transactions
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Allocation Chart */}
            <Card title="Asset Allocation">
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 relative">
                  {/* Simple pie chart visualization */}
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="20" />
                    {/* BTC slice */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="20" 
                      strokeDasharray={`${71.8 * 2.51} ${(100 - 71.8) * 2.51}`} 
                    />
                    {/* ETH slice */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#8b5cf6" 
                      strokeWidth="20" 
                      strokeDasharray={`${27.1 * 2.51} ${100 * 2.51}`} 
                      strokeDashoffset={`${-(71.8) * 2.51}`}
                    />
                    {/* SOL slice */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="20" 
                      strokeDasharray={`${1.1 * 2.51} ${100 * 2.51}`} 
                      strokeDashoffset={`${-(71.8 + 27.1) * 2.51}`}
                    />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-3">
                {portfolioData.assets.map((asset, index) => (
                  <div key={asset.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ 
                          backgroundColor: index === 0 ? '#3b82f6' : 
                                            index === 1 ? '#8b5cf6' : 
                                            '#10b981' 
                        }}
                      ></div>
                      <span className="text-sm text-gray-600">{asset.name} ({asset.symbol})</span>
                    </div>
                    <span className="text-sm font-medium">{asset.allocation.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Price Tracker */}
            <PriceTracker showSearch={false} maxItems={3} />
            
            {/* Watchlist */}
            <Watchlist showTitle={true} />
          </div>
        </div>
      </div>
    </div>
  );
} 