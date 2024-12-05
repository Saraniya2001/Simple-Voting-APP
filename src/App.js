import React, { useState } from 'react';
import './App.css';
import './style.css';
import player1Image from './images/msdhoni.jpeg';
import player2Image from './images/thisara.jpg';
import player3Image from './images/virat.jpg';

const playersData = [
  { id: 1, name: 'MS Dhoni', country: 'India ', votes: 0, image: player1Image},
  { id: 2, name: 'Thisara Perera', country: 'SriLanka', votes: 0, image: player2Image },
  { id: 3, name: 'Virat Kohli', country: 'India', votes: 0, image: player3Image },
];

const App =() => {
  const [players, setPlayers] = useState(playersData);

  const handleVote = (id) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, votes: player.votes + 1} : player 
      )
    );
  };

  return(
    <div className = "App">
      <h1>Voting for Cricket Players.</h1>
      <div className = "players-container">
        {players.map((player) => (
          <div key = {player.id} className = "player-card">
            <div className='player-image'>
              <img src = {player.image} alt = {player.name} onError={(event) => {
                event.target.src = "C:/Users/MSF SIMAHA/OneDrive/Desktop/LAb9/my-react-app/images/virat.jpg"}}/>
              <img src={player.image} alt={player.name} />
            </div>
            
            <h2>{player.name}</h2>
            <p>{player.country}</p>
            <p>Votes : {player.votes}</p>
            <div className='btn'>
             <button onClick = {() => handleVote(player.id)}>Vote</button>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default App;