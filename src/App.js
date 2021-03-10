import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DisplayTeamList from './components/Header/DisplayTeamList/DisplayTeamList';
import { useEffect, useState } from 'react';


function App() {
  const [team, setteam] = useState([]);
  useEffect(() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
    fetch(url)
      .then(res => res.json())
      .then(data => setteam(data.teams))
  }, []);
  return (
    <div>
      <Header></Header>
      <div className='flex'>
        {
          team.map(team => <DisplayTeamList team={team}></DisplayTeamList>)
        }
      </div>
    </div>
  );
}

export default App;
