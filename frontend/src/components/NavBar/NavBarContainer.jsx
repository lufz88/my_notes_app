import { useContext } from 'react';
import NavBar from './NavBar';
import { Context } from '../../context/Context';

const NavBarContainer = () => {
	const { setTagUrl } = useContext(Context);
	const handleClick = () => {
		setTagUrl('');
	};
	return <NavBar handleClick={handleClick} />;
};

export default NavBarContainer;
