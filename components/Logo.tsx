import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'light' }) => {
  // Direct link to the Google Drive image
  const logoUrl = "https://lh3.googleusercontent.com/d/1eipoS9qiCy8TuwS9at7ILzxuuIzWtjhA";

  return (
    <div className={`relative flex items-center gap-3 ${className}`}>
      {/* Container for the logo image to handle background issues nicely */}
      <div className="relative overflow-hidden rounded-lg bg-white shadow-sm p-1 border border-slate-100">
        <img 
          src={logoUrl} 
          alt="Company Logo" 
          className="h-full w-auto object-contain max-h-16 mix-blend-multiply" 
          style={{ maxWidth: '140px' }}
        />
      </div>
    </div>
  );
};