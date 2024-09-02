import React from 'react';
import lotrfolks from './assets/lotr-folks.png';
import './App.css';
import IntroComponent from './components/IntroComponent';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img
					src={lotrfolks}
					className="Lotr-folks-logo"
					alt="lotrfolks"
				/>
				<IntroComponent />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Начать путешествие по Средиземью Монреаля
				</a>
			</header>
		</div>
	);
}

export default App;
