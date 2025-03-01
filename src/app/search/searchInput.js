// /app/search/SearchInput.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CiSearch } from 'react-icons/ci';

export default function SearchInput({ className }) {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (input.trim() === '') return;
    router.push(`/search?query=${encodeURIComponent(input)}`);
  };

  return (
    <div className={`bg-white px-4 py-2 flex items-center justify-between rounded-md shadow-lg ${className}`}>
      <input
        className="focus:outline-none w-full text-black"
        type="text"
        placeholder="Search for Courses"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <CiSearch
        onClick={handleSearch}
        className="bg-orange-500 text-white w-10 h-10 p-2 rounded-md cursor-pointer"
      />
    </div>
  );
}