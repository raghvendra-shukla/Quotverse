import React from 'react';

const QuoteCard = ({ quote, onLike, onUnlike }) => {
  const handleLike = () => {
    onLike(quote.id);
  };

  const handleUnlike = () => {
    onUnlike(quote.id);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{quote.content}</p>
        <div className="flex items-center">
          {quote.liked ? (
            <button onClick={handleUnlike} className="text-red-500">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35L10.55 20.03C5.17 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.94 4.5 2.45C13.09 3.94 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.77-3.17 6.86-8.55 11.53L12 21.35z" />
              </svg>
            </button>
          ) : (
            <button onClick={handleLike} className="text-gray-500">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.24 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.94 4.5 2.45C13.09 3.94 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.77-3.17 6.86-8.55 11.53L12 21.35z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;

