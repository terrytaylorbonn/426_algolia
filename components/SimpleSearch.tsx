import { useState } from 'react';
import Link from 'next/link';

const searchData = [
  {
    title: 'Authentication',
    content: 'API Key Authentication OAuth 2.0 JWT Tokens security',
    url: '/docs/authentication'
  },
  {
    title: 'Error Handling', 
    content: 'HTTP status codes 400 401 404 500 error response format',
    url: '/docs/errors'
  },
  {
    title: 'Sprocket Quantumizer',
    content: 'quantum flux inversion phase vectors triple-spin anchors graviton buffering',
    url: '/docs/sprockets'
  },
  {
    title: 'Flarnet Synchronization',
    content: 'recursive harmonics interdimensional mesh network Dr. Zarnok Helix Drive',
    url: '/docs/flarnets'
  }
];

export default function SimpleSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filtered);
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search documentation..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => query.length >= 2 && setIsOpen(true)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {results.map((result, index) => (
            <Link
              key={index}
              href={result.url}
              className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-gray-900">{result.title}</div>
              <div className="text-sm text-gray-600 truncate">{result.content}</div>
            </Link>
          ))}
        </div>
      )}
      
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 px-4 py-3">
          <div className="text-gray-500">No results found for "{query}"</div>
        </div>
      )}
    </div>
  );
}
