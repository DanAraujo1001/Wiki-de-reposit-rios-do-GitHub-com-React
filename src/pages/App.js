import { useState } from 'react';
import gitLogo from '../assets/github-logo.png'
import Input from '../components/Input'
import ItemRepo from '../components/IntemRepo';
import Button from '../components/Button';
import { api } from '../services/api.js'

import { Container } from './styles.js'


function App() {
  const [repo, setRepo] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if (data.id) {

      const isExist = repo.find(repo => repo.id === data.id);
      if(!isExist) {
        setRepo(prev => [data, ...prev]);
        setCurrentRepo('')
      }
    }
  }

  const handleRemoveRepo = (id) => {
    const repoUpdated = repo.filter(repo => repo !== id)
    setRepo(repoUpdated)
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo GitHub' />
      <Input  value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repo.map(repo => <ItemRepo handleRemoveRepo={() => handleRemoveRepo(repo)} repo={repo} />)}
    </Container>
  );
}

export default App;
