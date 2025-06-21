'use client';
import { useState, useEffect } from 'react';
import quotes from '../utils/quotes';

export default function QuoteBox() {
  const [quote, setQuote] = useState({});

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-2xl max-w-xl mx-auto p-8 text-center transition-all duration-300">
      <p className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 italic">
        “{quote.text}”
      </p>
      <p className="text-sm sm:text-base font-semibold text-gray-600 mb-6">
        — {quote.author}
      </p>
      <button
        onClick={getRandomQuote}
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-full font-medium shadow"
      >
        New Quote
      </button>
    </div>
  );
}
