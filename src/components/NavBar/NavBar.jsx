import Proptypes from 'prop-types';

import styles from './styles/NavBar.module.scss';


import CartWidget from '../CartWidget/CartWidget';
import Search from '../Search/Search';
import User from '../Icons/User';

const NavBar = ({menus, children}) => {
	return (
		<>
			<div className= {styles.navbar}>
				
				<Search />
				<User />
				<CartWidget />
			</div>	
			<div className= {styles.navbarmenus}>
				{ menus.map((menu)=> { return <a href="/#">{menu}</a> }) }	
			</div>	
		</>
	)
}

NavBar.proptype = {
	menus: Proptypes.array.isRequired,
	children: Proptypes.element
}

export default NavBar;
