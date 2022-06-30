import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../data';

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loadign, setLoadigin] = useState(false);
  const [error, setError] = useState('');

  const getFetchArticles = async () => {
    setLoadigin(true);
    setError('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const res = await fetch(api);
      if (res.ok) {
        const data = await res.json();
        setArticles(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadigin(false);
    }
  };

  useEffect(() => {
    getFetchArticles();
  }, []);

  return (
    <>
      <h2>Articles</h2>
      {loadign && <p>Loading...</p>}
      <button onClick={getFetchArticles}>get data</button>
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
