import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import HomePage from './components/pages/Homepage.component';
import Shop from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUps from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;

componentDidMount() {
	this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
		this.setState({currentUser: user});
	})
}

componentWillUnmount() {
	this.unsubscribeFromAuth();
};



	render() {
		return (
			<div>
			<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route path='/signin' component={SignInAndSignUps} />
				</Switch>
			</div>
		);

	}

}

export default App;
