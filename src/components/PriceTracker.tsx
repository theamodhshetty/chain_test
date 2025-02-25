"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Search, X } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

// Mock data for crypto prices - in a real app, this would come from an API
const mockCryptoData = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 42180.75, change24h: 2.35 },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 2350.42, change24h: 3.78 },
  { id: 'solana', name: 'Solana', symbol: 'SOL', price: 96.32, change24h: -0.84 },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 0.58, change24h: 1.42 },
  { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price: 6.27, change24h: -1.23 },
  { id: 'ripple', name: 'Ripple', symbol: 'XRP', price: 0.57, change24h: 4.78 },
  { id: 'avalanche', name: 'Avalanche', symbol: 'AVAX', price: 34.91, change24h: 5.67 },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', price: 0.095, change24h: -2.15 }
];

interface PriceTrackerProps {
  maxItems?: number;
  initiallyExpanded?: boolean;
  showSearch?: boolean;
}

export default function PriceTracker({
  maxItems = 5,
  initiallyExpanded = false,
  showSearch = true
}: PriceTrackerProps) {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const [searchTerm, setSearchTerm] = useState('');
  const [cryptoData, setCryptoData] = useState(mockCryptoData);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prevData => 
        prevData.map(crypto => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() * 0.002 - 0.001)),
          change24h: crypto.change24h + (Math.random() * 0.4 - 0.2)
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Filter data based on search term
  const filteredData = searchTerm 
    ? cryptoData.filter(crypto => 
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cryptoData;

  // Display all data if expanded, otherwise just the top few coins
  const displayData = expanded ? filteredData : filteredData.slice(0, maxItems);

  const formatPrice = (price: number) => {
    return price < 1 
      ? price.toFixed(4) 
      : price < 10 
        ? price.toFixed(2) 
        : price.toLocaleString('en-US', { maximumFractionDigits: 2 });
  };

  return (
    <Card title="Cryptocurrency Prices" className="w-full">
      {showSearch && (
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search coins..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      )}

      <div className="space-y-2">
        {displayData.map((crypto) => (
          <div key={crypto.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white font-medium text-xs">
                {crypto.symbol.substring(0, 3)}
              </div>
              <div>
                <div className="font-medium">{crypto.name}</div>
                <div className="text-xs text-gray-500">{crypto.symbol}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">${formatPrice(crypto.price)}</div>
              <div className="flex items-center justify-end mt-1">
                <Badge 
                  variant={crypto.change24h >= 0 ? 'success' : 'danger'} 
                  size="sm"
                  icon={crypto.change24h >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                >
                  {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length > maxItems && !expanded && (
        <button 
          onClick={() => setExpanded(true)} 
          className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium w-full text-center py-2 border-t border-gray-100"
        >
          Show All ({filteredData.length}) Coins
        </button>
      )}
      
      {expanded && (
        <button 
          onClick={() => setExpanded(false)} 
          className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium w-full text-center py-2 border-t border-gray-100"
        >
          Show Less
        </button>
      )}
    </Card>
  );
} 