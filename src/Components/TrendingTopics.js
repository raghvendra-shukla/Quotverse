import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const TrendingTopics = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetchtags();
    }, []);

    const fetchtags = async () => {
        let res=await fetch('https://api.quotable.io/tags');
        let parseddata=await res.json();
        setTags(parseddata);
    };
    return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Trending Topics</h2>
      <ul>
        {tags.map(t => (
          <li key={t._id} className="text-blue-500 cursor-pointer">
            #{t.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;