"use client";

import React, { useState, useEffect } from 'react';
import { Bell, TrendingUp, TrendingDown, Star, Plus, Trash2 } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';
import { useToast } from './ToastProvider';

// Mock data for crypto prices
const defaultWatchlist = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 42180.75, change24h: 2.35, notes: 'Wait for pullback to buy more' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 2350.42, change24h: 3.78, notes: 'Long term hold' },
  { id: 'solana', name: 'Solana', symbol: 'SOL', price: 96.32, change24h: -0.84, notes: 'Consider buying more under $90' },
];

interface WatchlistItem {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  notes: string;
}

interface WatchlistProps {
  showTitle?: boolean;
}

export default function Watchlist({ showTitle = true }: WatchlistProps) {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>(defaultWatchlist);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCoin, setNewCoin] = useState({ name: '', symbol: '' });
  const { showToast } = useToast();

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setWatchlist(prevList => 
        prevList.map(item => ({
          ...item,
          price: item.price * (1 + (Math.random() * 0.004 - 0.002)),
          change24h: item.change24h + (Math.random() * 0.6 - 0.3)
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleAddCoin = () => {
    if (!newCoin.name || !newCoin.symbol) {
      showToast('Please enter both name and symbol', 'warning');
      return;
    }

    const newItem: WatchlistItem = {
      id: newCoin.name.toLowerCase().replace(/\s/g, '-'),
      name: newCoin.name,
      symbol: newCoin.symbol.toUpperCase(),
      price: 1000 + Math.random() * 1000,
      change24h: Math.random() * 10 - 5,
      notes: ''
    };

    setWatchlist(prev => [...prev, newItem]);
    setNewCoin({ name: '', symbol: '' });
    setShowAddForm(false);
    showToast(`${newCoin.name} added to watchlist`, 'success');
  };

  const handleSaveNote = (id: string) => {
    setWatchlist(prevList => 
      prevList.map(item => 
        item.id === id ? { ...item, notes: noteText } : item
      )
    );
    setEditingId(null);
    showToast('Notes updated', 'success');
  };

  const handleEditNote = (id: string, currentNote: string) => {
    setEditingId(id);
    setNoteText(currentNote);
  };

  const handleRemove = (id: string) => {
    setWatchlist(prevList => prevList.filter(item => item.id !== id));
    showToast('Removed from watchlist', 'info');
  };

  const formatPrice = (price: number) => {
    return price < 1 
      ? price.toFixed(4) 
      : price < 10 
        ? price.toFixed(2) 
        : price.toLocaleString('en-US', { maximumFractionDigits: 2 });
  };

  return (
    <Card 
      title={showTitle ? "My Watchlist" : undefined} 
      className="w-full"
      footer={
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full" 
          icon={<Plus className="h-4 w-4" />}
          onClick={() => setShowAddForm(true)}
        >
          Add to Watchlist
        </Button>
      }
    >
      {showAddForm && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Add Cryptocurrency</h4>
          <div className="space-y-3">
            <div>
              <label htmlFor="coinName" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="coinName"
                placeholder="e.g. Bitcoin"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={newCoin.name}
                onChange={(e) => setNewCoin(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="coinSymbol" className="block text-sm font-medium text-gray-700 mb-1">
                Symbol
              </label>
              <input
                type="text"
                id="coinSymbol"
                placeholder="e.g. BTC"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={newCoin.symbol}
                onChange={(e) => setNewCoin(prev => ({ ...prev, symbol: e.target.value }))}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                onClick={handleAddCoin}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      )}

      {watchlist.length === 0 ? (
        <div className="text-center py-8">
          <Star className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Your watchlist is empty</p>
          <p className="text-gray-400 text-sm">Add cryptocurrencies to track them</p>
        </div>
      ) : (
        <div className="space-y-4">
          {watchlist.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white font-medium text-xs">
                    {item.symbol.substring(0, 3)}
                  </div>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${formatPrice(item.price)}</div>
                  <Badge 
                    variant={item.change24h >= 0 ? 'success' : 'danger'} 
                    size="sm"
                    icon={item.change24h >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  >
                    {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}%
                  </Badge>
                </div>
              </div>
              
              {editingId === item.id ? (
                <div className="mt-3">
                  <textarea
                    rows={2}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add notes..."
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                  ></textarea>
                  <div className="flex justify-end gap-2 mt-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      variant="primary" 
                      onClick={() => handleSaveNote(item.id)}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mt-3 flex justify-between items-center">
                  <div 
                    className="text-sm text-gray-600 italic px-3 py-1 bg-gray-100 rounded-md flex-grow mr-2"
                    style={{ minHeight: '28px' }}
                  >
                    {item.notes || <span className="text-gray-400">No notes</span>}
                  </div>
                  <div className="flex space-x-1">
                    <button 
                      className="p-1 text-gray-500 hover:text-blue-600 rounded"
                      onClick={() => handleEditNote(item.id, item.notes)}
                      title="Edit notes"
                    >
                      <Bell className="h-4 w-4" />
                    </button>
                    <button 
                      className="p-1 text-gray-500 hover:text-red-600 rounded"
                      onClick={() => handleRemove(item.id)}
                      title="Remove from watchlist"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
} 