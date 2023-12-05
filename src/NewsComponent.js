import React, { useState, useEffect } from 'react';
import './NewsComponent.css';
import unknownImage from './img/Unknown.png';


const NewsComponent = ({ country }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    document.title = "Invididual Articles being rendered"; // Set the document title
  }, []);

  useEffect(() => {
    const apiKey = '21e1d2528b9d44d79953725b95dbd946';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [country]);

  const displayImage = (article) => {
    return article.urlToImage ? article.urlToImage : unknownImage;
  };
  const displayAuthor = (article) => {
    return article.author ? article.author : 'Anonymous';
  };
  const displayDescription = (article) => {
    return article.description ? article.description : 'Not Available';
  };

  return (
    <div className="news-container">
      <h2>News from <span className="capitalize-text">{country}</span></h2>
      <div className="article-list">
        {news.map((article, index) => (
          <div key={index} className="article">
            <img
              src={displayImage(article)}
              alt="Article Thumbnail"
              className="article-image"
            />
            <div className="article-details">
              <div className="text-over-image"><strong>{article.source.name}</strong></div>
              <h3>{article.title}</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Author:</td>
                    <td>{displayAuthor(article)} on {new Date(article.publishedAt).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Description:</td>
                    <td>{displayDescription(article)}</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;