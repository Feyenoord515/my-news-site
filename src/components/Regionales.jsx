import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet'; // sirve para anclar la publicidad a la pagina. investigar bien.
 
const Regionales = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const apiKey = '98a6ecc5700e4075b3b6d8a253435764';
    const fetchData = async () => {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=${apiKey}`
          );
      console.log(response)
      setNewsData(response.data.articles);
    };

    fetchData();
  }, []);

  return (
    <div>
       <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6227813175231620" crossorigin="anonymous"></script>
      </Helmet>
      <h2>Noticias Regionales</h2>
      <ul>
        {newsData.map((article, index) => (
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

export default Regionales;
