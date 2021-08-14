import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import HomePage from './components/pages/Homepage.component';
import Shop from './components/pages/shop/shop.component';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={Shop} />
			</Switch>
		</div>
	);
}

export default App;
