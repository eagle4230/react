import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../data';

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loadign, setLoadigin] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoadigin(true);
    setError('');

    setTimeout(() => {
      fetch(api)
        .then((res) => res.json())
        .then((data) => setArticles(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoadigin(false));
    }, 1000);
  }, []);

  return (
    <>
      <h2>Articles</h2>
      {loadign && <p>Loading...</p>}
      {!loadign && (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
