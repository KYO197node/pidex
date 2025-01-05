import React from 'react';
import { Wallet, Menu, Star, Settings, HelpCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">π</span>
              </div>
              <span className="text-xl font-bold">PI DEX</span>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Markets
              </a>
              <a href="#" className="text-gray-300 hover:text-white">Exchange</a>
              <a href="#" className="text-gray-300 hover:text-white">Portfolio</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white p-2">
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white p-2">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}