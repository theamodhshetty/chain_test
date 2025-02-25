"use client";

import React, { ReactNode } from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  icon?: ReactNode;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon
}: BadgeProps) {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full";
  
  // Size styles
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-xs",
    lg: "px-3 py-1 text-sm"
  };
  
  // Variant styles
  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-indigo-100 text-indigo-800"
  };
  
  // Combined styles
  const badgeStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  return (
    <span className={badgeStyles}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
} 