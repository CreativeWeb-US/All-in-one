import React from 'react';
import { Hammer, Trash2 } from 'lucide-react';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Hammer className="text-orange-600" size={size === 'sm' ? 24 : size === 'md' ? 32 : 40} />
        <Trash2 
          className="text-navy-800 absolute -bottom-1 -right-1" 
          size={size === 'sm' ? 18 : size === 'md' ? 24 : 32} 
        />
      </div>
      <div className={`font-bold ${sizeClasses[size]} text-navy-900`}>
        <span className="text-orange-600">All</span> in <span className="text-orange-600">One</span>
      </div>
    </div>
  );
};

export default Logo;