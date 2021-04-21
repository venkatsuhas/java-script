import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader'
import TicTacToeGame from './components/Game';


function App() {
  return (
    <div>
    <AppHeader/>
    <TicTacToeGame/>
    </div>
  );
}

export default App;