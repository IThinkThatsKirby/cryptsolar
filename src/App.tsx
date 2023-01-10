import { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App h-screen w-screen bg-gray-900 bg-[url('./assets/slatebrick.jpg')]">
			<Navbar />
			<div className='text-cyan-300 text-center'>boo</div>
		</div>
	);
}

export default App;
