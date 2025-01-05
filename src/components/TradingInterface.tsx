import React, { useState } from 'react';
import { ArrowDownUp, ChevronDown } from 'lucide-react';
import { AssetSelector } from './AssetSelector';
import { OrderBook } from './OrderBook';
import { TradeHistory } from './TradeHistory';
import { MarketStats } from './MarketStats';

export function TradingInterface() {
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [orderType, setOrderType] = useState('limit');

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Market Stats */}
      <div className="col-span-12">
        <MarketStats />
      </div>

      {/* Trading Form */}
      <div className="col-span-12 lg:col-span-3 space-y-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex space-x-2 mb-6">
            {['limit', 'market'].map((type) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-lg capitalize
                  ${orderType === type 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                {type}
              </button>
            ))}
          </div>
          
          <div className="space-y-4">
            <AssetSelector label="Pay with" />
            
            <div className="flex justify-center">
              <button className="p-2 hover:bg-gray-700 rounded-full">
                <ArrowDownUp className="w-5 h-5 text-purple-400" />
              </button>
            </div>
            
            <AssetSelector label="Receive" />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm text-gray-400">Amount</label>
                <span className="text-sm text-gray-400">Balance: 0 PI</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg p-3 pr-20 focus:ring-2 focus:ring-purple-500"
                  placeholder="0.0"
                />
                <button className="absolute right-2 top-2 px-2 py-1 text-sm text-purple-400 hover:text-purple-300">
                  MAX
                </button>
              </div>
            </div>
            
            {orderType === 'limit' && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm text-gray-400">Price</label>
                  <span className="text-sm text-gray-400">≈ $0.00</span>
                </div>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
                  placeholder="0.0"
                />
              </div>
            )}
            
            <div className="pt-4">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold">
                Trade
              </button>
            </div>
          </div>
        </div>

        {/* Quick Trade Options */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Trade</h3>
          <div className="space-y-2">
            {[25, 50, 75, 100].map((percent) => (
              <button
                key={percent}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm"
              >
                {percent}% of Balance
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Order Book */}
      <div className="col-span-12 lg:col-span-5">
        <OrderBook />
      </div>
      
      {/* Trade History */}
      <div className="col-span-12 lg:col-span-4">
        <TradeHistory />
      </div>
    </div>
  );
}