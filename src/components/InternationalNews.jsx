import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InternationalNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '98a6ecc5700e4075b3b6d8a253435764';

    const fetchNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`
      );
      setNews(response.data.articles);
    };

    fetchNews();
  }, []);
console.log(news)
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">International News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index} className="mb-4">
            <a href={article.url} target="_blank" rel="noreferrer">
              <h3 className="text-blue-500 hover:text-blue-700 font-medium">
                {article.title}
              </h3>
            </a>
            <p className="text-gray-500">{article.description}</p>
            <div className="text-sm text-gray-600">{article.source.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternationalNews;
