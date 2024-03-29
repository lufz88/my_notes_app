import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TagMenuContainer from '../TagMenu/TagMenuContainer';
import CreateModal from '../CreateModal/CreateModal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ handleClick }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						My Notes App
					</Typography>
					<CreateModal />
					<Link
						to='/'
						style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
						onClick={handleClick}>
						<Button color='inherit'>All</Button>
					</Link>
					<Link
						to='/active'
						style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
						onClick={handleClick}>
						<Button color='inherit'>Active</Button>
					</Link>
					<Link
						to='/archive'
						style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
						onClick={handleClick}>
						<Button color='inherit'>Archive</Button>
					</Link>
					<TagMenuContainer />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

NavBar.propTypes = {
	handleClick: PropTypes.func.isRequired,
};

export default NavBar;
