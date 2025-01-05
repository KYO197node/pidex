import React from 'react';

export function TradeHistory() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Trade History</h2>
      
      <div className="grid grid-cols-4 text-sm text-gray-400 mb-2">
        <div>Price (USDC)</div>
        <div className="text-right">Amount (PI)</div>
        <div className="text-right">Time</div>
        <div className="text-right">Total</div>
      </div>
      
      <div className="space-y-2">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="grid grid-cols-4 text-sm">
            <span className={i % 2 === 0 ? 'text-green-500' : 'text-red-500'}>
              0.1123{i}
            </span>
            <span className="text-right">1,234.56</span>
            <span className="text-right text-gray-400">
              {new Date(Date.now() - i * 60000).toLocaleTimeString()}
            </span>
            <span className="text-right text-gray-400">138.52</span>
          </div>
        ))}
      </div>
    </div>
  );
}