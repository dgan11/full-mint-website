import './App.css';
import { useState } from  'react';
import MainMint from './components/MainMint';
import NavBar from './components/Navbar';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
    </div>
  );
}

export default App;
