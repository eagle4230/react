import { useState } from "react";
import { useEffect } from "react";
import { api } from "../data";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <>
      <h2>Articles</h2>
      <ul>
        {articles.map(article => <li key={article.id}>{article.title}</li>)}
      </ul>
    </>
  );
};