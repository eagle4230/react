import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/articles/slice';

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((store) => store.articles.articles);
  const loadign = useSelector((store) => store.articles.loadign);
  const error = useSelector((store) => store.articles.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <h2>Articles</h2>
      {loadign && <p>Loading...</p>}
      <button onClick={() => dispatch(fetchData())}>get data</button>
      {
        !loadign && (
          <ul>
            {articles.map((article) => (
              <li key={article.id}>{article.title}</li>
            ))}
          </ul>
        )
      }

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
