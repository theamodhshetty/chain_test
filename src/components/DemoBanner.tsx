"use client";

import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface DemoBannerProps {
  message?: string;
  variant?: 'default' | 'warning' | 'info';
}

export default function DemoBanner({ 
  message = "Demo Mode: This is a UI prototype. Buttons and features are non-functional.",
  variant = 'warning'
}: DemoBannerProps) {
  
  const bannerStyles = {
    default: "bg-gray-50 border-gray-200 text-gray-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800", 
    info: "bg-blue-50 border-blue-200 text-blue-800"
  };
  
  const iconStyles = {
    default: "text-gray-500",
    warning: "text-amber-500",
    info: "text-blue-500"
  };
  
  return (
    <div className={`sticky top-16 z-40 w-full ${bannerStyles[variant]} border-b`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2">
        <AlertTriangle className={`h-4 w-4 ${iconStyles[variant]}`} />
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
} 