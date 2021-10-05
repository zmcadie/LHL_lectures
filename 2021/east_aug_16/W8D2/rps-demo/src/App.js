import GameDisplay from './GameDisplay';
import './App.css';

export function StatsDisplay() {
  return (
    <section className="stats-container">
      <div>PLAYER: 0</div>
      <div>COMPUTER: 0</div>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <h1>RPS - Grand Slam</h1>
      <StatsDisplay />
      <GameDisplay />
    </div>
  );
}

export default App;
