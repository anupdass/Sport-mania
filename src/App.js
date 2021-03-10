import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DisplayTeamList from './components/Header/DisplayTeamList/DisplayTeamList';
import { useEffect, useState } from 'react';
import { Tram } from '@material-ui/icons';

function App() {
  const [team,setteam] = useState([]);
  useEffect(()=>{
    const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
    fetch(url)
    .then(res => res.json())
    .then(data => setteam(data.teams) )
  },[]);
  return (
    <div>
         <Header></Header>
         <ul>
         {
           team.map(team => <DisplayTeamList team={team}></DisplayTeamList>)
         }
         </ul>       
    </div>
  );
}

export default App;
