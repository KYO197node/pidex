import React from 'react';
import { ArrowDownUp } from 'lucide-react';

export function OrderBook() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Order Book</h2>
        <button className="p-2 hover:bg-gray-700 rounded-lg">
          <ArrowDownUp className="w-4 h-4" />
        </button>
      </div>
      
      {/* Column Headers */}
      <div className="grid grid-cols-4 text-sm text-gray-400 mb-2">
        <div>Price (USDC)</div>
        <div className="text-right">Amount (PI)</div>
        <div className="text-right">Total (USDC)</div>
        <div className="text-right">Sum (USDC)</div>
      </div>
      
      {/* Sells */}
      <div className="space-y-1 mb-4">
        {[...Array(8)].map((_, i) => (
          <div key={`sell-${i}`} className="grid grid-cols-4 text-sm relative">
            <div className="absolute inset-0 bg-red-500/10" style={{ width: `${30 + i * 8}%` }}></div>
            <div className="relative text-red-500">{(3.14 + (i * 0.02)).toFixed(2)}</div>
            <div className="relative text-right">1,234.56</div>
            <div className="relative text-right">3,876.52</div>
            <div className="relative text-right">15,846.23</div>
          </div>
        ))}
      </div>
      
      {/* Current Price */}
      <div className="text-center py-3 border-y border-gray-700 mb-4">
        <div className="text-2xl font-semibold text-white">3.14</div>
        <div className="text-sm text-gray-400">≈ $3.14</div>
      </div>
      
      {/* Buys */}
      <div className="space-y-1">
        {[...Array(8)].map((_, i) => (
          <div key={`buy-${i}`} className="grid grid-cols-4 text-sm relative">
            <div className="absolute inset-0 bg-green-500/10" style={{ width: `${30 + i * 8}%` }}></div>
            <div className="relative text-green-500">{(3.14 - ((i + 1) * 0.02)).toFixed(2)}</div>
            <div className="relative text-right">1,234.56</div>
            <div className="relative text-right">3,876.52</div>
            <div className="relative text-right">15,846.23</div>
          </div>
        ))}
      </div>
    </div>
  );
}