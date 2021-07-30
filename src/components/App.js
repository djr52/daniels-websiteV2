import '../styles/App.css';

import {BrowserRouter} from 'react-router-dom';
import Navbar from "./Navbar";

import Particles from 'react-particles-js';

function App() {
  return (
    <div className="fill-window">
        <BrowserRouter>
          <Navbar/>
          <div className="container"> 
          <Particles className="particles-js"
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}} />
          </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
