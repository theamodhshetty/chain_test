"use client";

import React from 'react';
import { Info, Bell, AlertTriangle, CheckCircle } from 'lucide-react';

interface AnnouncementBannerProps {
  message: string;
  variant?: 'default' | 'warning' | 'info' | 'success';
  isVisible?: boolean;
}

export default function AnnouncementBanner({ 
  message = "Welcome to ChainInsight - AI-powered crypto insights platform",
  variant = 'info',
  isVisible = true
}: AnnouncementBannerProps) {
  
  if (!isVisible) return null;
  
  const bannerStyles = {
    default: "bg-gray-50 border-gray-200 text-gray-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800", 
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800"
  };
  
  const iconStyles = {
    default: "text-gray-500",
    warning: "text-amber-500",
    info: "text-blue-500",
    success: "text-green-500"
  };
  
  const Icon = {
    default: Bell,
    warning: AlertTriangle,
    info: Info,
    success: CheckCircle
  }[variant];
  
  return (
    <div className={`sticky top-16 z-40 w-full ${bannerStyles[variant]} border-b`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2">
        <Icon className={`h-4 w-4 ${iconStyles[variant]}`} />
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
} 