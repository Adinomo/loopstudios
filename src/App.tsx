import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Creations from './components/Creations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Slide from './components/Slide';


function App() {

  return (
			<div className="font-primary">
				<Navbar />
				<Slide />
				<Hero />
				<Creations />
				<Footer />
			</div>
		);
}

export default App
