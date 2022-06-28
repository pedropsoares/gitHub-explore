import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  );
}