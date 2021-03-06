import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils'


const Header = ({currentUser}) => {
	return (
		<div className="header">
			<Link classname="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/shop">
					Contact
				</Link>
				{
					currentUser ?
					<div className='option' onClick={() => auth.signOut()}>Sign Out</div>
					:
					<Link className='option' to='/signin'>Sign In</Link>
				}
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
currentUser: state.user.currentuser
})

export default connect(mapStateToProps)(Header);
