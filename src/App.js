import { Navbar } from 'react-bootstrap';
import './App.css';
import Contacts from './components/Contacts';
import NavbarCom from './components/NavBar.js/NavbarCom';

function App() {
  return (
    <div className="App">
      <NavbarCom />
      <Contacts />
    </div>
  );
}

export default App;
