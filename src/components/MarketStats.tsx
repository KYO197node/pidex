import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function MarketStats() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            PI/USDC
            <span className="ml-2 text-green-500 flex items-center text-lg">
              <TrendingUp className="w-5 h-5 mr-1" />
              +0.63%
            </span>
          </h2>
          <p className="text-gray-400 mt-1">$3.14</p>
        </div>

        <div className="space-y-1">
          <div className="text-gray-400 text-sm">24h Volume</div>
          <div className="text-lg font-semibold">$5,234,567</div>
        </div>

        <div className="space-y-1">
          <div className="text-gray-400 text-sm">24h High</div>
          <div className="text-lg font-semibold text-green-500">$4.15</div>
        </div>

        <div className="space-y-1">
          <div className="text-gray-400 text-sm">24h Low</div>
          <div className="text-lg font-semibold text-red-500">$3.12</div>
        </div>
      </div>
    </div>
  );
}