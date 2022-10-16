import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// React Components
import Proposals from './components/Proposals';
import About from './components/About';
import Home from './components/Home';
import MintToken from './components/MintToken';
import Propose from './components/Propose';
import MarketPlace from './components/MarketPlace';

//CSS
import './mainpage.css';

const App = () => {

  return (
	<>
	<Router>
		<Navbar />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/mintToken' element={<MintToken />} />
			<Route path='/propose' element={<Propose />} />
			<Route path='/proposals' element={<Proposals />} />
			<Route path='/marketplace' element={<MarketPlace />} />
			<Route path='/about' element={<About />} />
		</Routes>
	</Router>
	</>
  );
};

export default App;
