import '../styles/App.css';

import {BrowserRouter} from 'react-router-dom';
import Navbar from "./Navbar";

import Particles from './ParticlesComponent';

function App() {
  return (
    <div className="fill-window">
        <BrowserRouter>
          <Navbar/>
          <div className="container"> 
          <Particles/>
          </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
