import '../styles/App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import Navbar from "./Navbar";

import Home from '../views/Home';
import About from '../views/About';
import Projects from '../views/Projects';
import Resume from '../views/Resume';
import Contact from '../views/Contact';

import Particles from './ParticlesComponent';

//import {AppContainer} from "../styles/ViewStyles";

function App() {
  return (
    <div className="wrapper font-family">
    	<BrowserRouter>
        	<Navbar/>
          		<Particles/>
				<Route
				        render={({ location }) => {
							return (
							  <PageTransition
								preset="moveToLeftFromRight"
								transitionKey={location.pathname}
							  >
								<Switch location={location}>
									<Route path ="/" exact component={Home}/>
									<Route path ="/about" component={About}/>
									<Route path ="/projects" component={Projects}/>
									<Route path ="/resume" component={Resume}/>
									<Route path ="/contact" component={Contact}/>
								</Switch>
							  </PageTransition>
							);
						  }}
				/>


        </BrowserRouter>

    </div>
  );
}

export default App;
