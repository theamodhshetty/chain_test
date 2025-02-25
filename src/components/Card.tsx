"use client";

import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string | ReactNode;
  footer?: ReactNode;
  isDemo?: boolean;
  demoText?: string;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  title,
  footer,
  isDemo = false,
  demoText = "Demo Feature",
  className = '',
  onClick
}: CardProps) {
  const cardClasses = `bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden ${
    onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''
  } ${className}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      {/* Card Header */}
      {title && (
        <div className="p-4 sm:p-6 border-b border-gray-100">
          {typeof title === 'string' ? (
            <h3 className="font-semibold text-gray-900">{title}</h3>
          ) : (
            title
          )}
        </div>
      )}
      
      {/* Card Body */}
      <div className="p-4 sm:p-6 relative">
        {children}
        
        {/* Demo Overlay */}
        {isDemo && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
              {demoText}
            </span>
          </div>
        )}
      </div>
      
      {/* Card Footer */}
      {footer && (
        <div className="p-4 sm:px-6 sm:py-4 bg-gray-50 border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
} 