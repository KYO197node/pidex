import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AssetSelectorProps {
  label: string;
}

export function AssetSelector({ label }: AssetSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm text-gray-400">{label}</label>
      <button className="w-full bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
          <span>Select Asset</span>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  );
}