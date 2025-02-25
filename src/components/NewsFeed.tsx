"use client";

import React, { useState } from 'react';
import { Clock, ExternalLink, Filter, ChevronDown, MessageSquare, ThumbsUp } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';

// Mock news data
const mockNews = [
  {
    id: 1,
    title: 'Bitcoin ETF Inflows Reach $500M in Single Day, Setting New Record',
    summary: 'Bitcoin spot ETFs have recorded their strongest day of inflows since launching in January, with combined net inflows exceeding $500 million in a single trading day.',
    source: 'CoinDesk',
    url: '#',
    date: '2h ago',
    category: 'Market',
    sentiment: 'positive',
    likes: 342,
    comments: 87
  },
  {
    id: 2,
    title: 'Ethereum Foundation Announces Major Upgrade Timeline',
    summary: 'The Ethereum Foundation has revealed a timeline for the next major network upgrade, which will include significant improvements to transaction throughput and reduce gas costs.',
    source: 'The Block',
    url: '#',
    date: '5h ago',
    category: 'Technology',
    sentiment: 'positive',
    likes: 271,
    comments: 53
  },
  {
    id: 3,
    title: 'SEC Commissioner Signals More Crypto-Friendly Approach',
    summary: 'In a recent speech, an SEC Commissioner suggested the agency should provide clearer guidance for cryptocurrency projects rather than relying on enforcement actions.',
    source: 'Bloomberg',
    url: '#',
    date: '8h ago',
    category: 'Regulation',
    sentiment: 'positive',
    likes: 524,
    comments: 142
  },
  {
    id: 4,
    title: 'Major Bank Launches Institutional Crypto Custody Service',
    summary: 'One of the world\'s largest investment banks has announced the launch of a cryptocurrency custody service aimed at institutional clients, marking another step in crypto adoption.',
    source: 'Financial Times',
    url: '#',
    date: '1d ago',
    category: 'Adoption',
    sentiment: 'positive',
    likes: 198,
    comments: 42
  },
  {
    id: 5,
    title: 'Vulnerability Found in Popular DeFi Protocol',
    summary: 'Security researchers have identified a vulnerability in a major DeFi protocol. The team has acknowledged the issue and is working on a fix, with no funds reported lost.',
    source: 'DeFi Pulse',
    url: '#',
    date: '1d ago',
    category: 'Security',
    sentiment: 'negative',
    likes: 156,
    comments: 62
  }
];

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  source: string;
  url: string;
  date: string;
  category: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  likes: number;
  comments: number;
}

interface NewsFeedProps {
  maxItems?: number;
  showFilters?: boolean;
}

export default function NewsFeed({ maxItems = 5, showFilters = true }: NewsFeedProps) {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(mockNews);
  const [filter, setFilter] = useState<string>('all');
  const [sort, setSort] = useState<string>('newest');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const filterCategories = ['all', 'Market', 'Technology', 'Regulation', 'Adoption', 'Security'];
  
  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'popular', label: 'Most Popular' }
  ];

  const filteredNews = newsItems
    .filter(item => filter === 'all' || item.category === filter)
    .sort((a, b) => {
      if (sort === 'newest') return 0; // Mock data is already sorted by newest
      if (sort === 'oldest') return 1; // Reverse the order
      if (sort === 'popular') return b.likes - a.likes; // Sort by likes
      return 0;
    })
    .slice(0, maxItems);

  const handleLike = (id: number) => {
    setNewsItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'success';
      case 'negative': return 'danger';
      default: return 'default';
    }
  };

  return (
    <Card 
      title="Crypto News" 
      className="w-full"
      footer={filteredNews.length < newsItems.length && (
        <Button variant="outline" className="w-full" size="sm">
          View All News
        </Button>
      )}
    >
      {showFilters && (
        <div className="flex justify-between mb-4">
          <div className="relative">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
              icon={<Filter className="h-3.5 w-3.5" />}
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              {filter === 'all' ? 'All Categories' : filter}
              <ChevronDown className="h-3.5 w-3.5 ml-1" />
            </Button>
            
            {showFilterDropdown && (
              <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg border border-gray-100 z-50 w-48">
                <ul className="py-1">
                  {filterCategories.map((category) => (
                    <li key={category}>
                      <button
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${filter === category ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                        onClick={() => {
                          setFilter(category);
                          setShowFilterDropdown(false);
                        }}
                      >
                        {category === 'all' ? 'All Categories' : category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="relative">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              Sort by
              <ChevronDown className="h-3.5 w-3.5 ml-1" />
            </Button>
            
            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-white rounded-md shadow-lg border border-gray-100 z-50 w-48">
                <ul className="py-1">
                  {sortOptions.map((option) => (
                    <li key={option.id}>
                      <button
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sort === option.id ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                        onClick={() => {
                          setSort(option.id);
                          setShowSortDropdown(false);
                        }}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="space-y-4">
        {filteredNews.map((item) => (
          <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <Badge variant={getSentimentColor(item.sentiment)} size="sm">{item.category}</Badge>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.date}
                </span>
              </div>
              <span className="text-xs text-gray-500">{item.source}</span>
            </div>
            
            <h3 className="font-medium text-gray-900 my-2 leading-snug">
              {item.title}
            </h3>
            
            <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button 
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600"
                  onClick={() => handleLike(item.id)}
                >
                  <ThumbsUp className="h-3.5 w-3.5" />
                  {item.likes}
                </button>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <MessageSquare className="h-3.5 w-3.5" />
                  {item.comments}
                </span>
              </div>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 text-xs font-medium flex items-center hover:underline"
              >
                Read More
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        ))}

        {filteredNews.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No news articles found</p>
            <p className="text-sm text-gray-400">Try adjusting your filter settings</p>
          </div>
        )}
      </div>
    </Card>
  );
} 