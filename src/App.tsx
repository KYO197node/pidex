import React from 'react';
import { Header } from './components/Header';
import { TradingInterface } from './components/TradingInterface';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto py-6">
        <TradingInterface />
      </main>
    </div>
  );
}

export default App;