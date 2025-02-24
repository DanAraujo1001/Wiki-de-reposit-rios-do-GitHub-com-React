import React from 'react';
import { RepoContainer } from './styles';

export default function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <RepoContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blanck'>Ver repositório</a>
      <button onClick={handleRemove} >Remover</button>
      <hr />
    </RepoContainer>
  )
}
