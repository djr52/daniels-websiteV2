import '../styles/App.css';

import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from "./Navbar";

import Home from '../views/Home';
import About from '../views/About';
import Projects from '../views/Projects';
import Resume from '../views/Resume';
import Contact from '../views/Contact';

import Particles from './ParticlesComponent';

function App() {
  return (
    <div className="wrapper">
    	<BrowserRouter>
        	<Navbar/>
          	<div className="container"> 
          		<Particles/>
				<Route path ="/" exact component={Home}/>
				<Route path ="/about" component={About}/>
				<Route path ="/projects" component={Projects}/>
				<Route path ="/resume" component={Resume}/>
				<Route path ="/contact" component={Contact}/>

          	</div>
        </BrowserRouter>

    </div>
  );
}

export default App;
