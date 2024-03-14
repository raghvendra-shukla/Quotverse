import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios

const QuoteFeed = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    let res=await fetch('https://api.quotable.io/quotes');
    let parseddata=await res.json();
    setQuotes(parseddata.results);
  };

  return (
    <div>
      <div className="space-y-4">
        {quotes.map(quote => (
          <div key={quote._id} className="bg-white shadow-md p-4 rounded-lg">
            <p className="text-gray-500">{quote.author}</p>
            <p className="text-lg">{quote.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteFeed;


