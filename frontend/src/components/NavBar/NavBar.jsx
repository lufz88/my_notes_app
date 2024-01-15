import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TagMenuContainer from '../TagMenu/TagMenuContainer';

const NavBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						My Notes App
					</Typography>
					<Button color='inherit'>Create Note</Button>
					<Button color='inherit'>All</Button>
					<Button color='inherit'>Active</Button>
					<Button color='inherit'>Archive</Button>
					<TagMenuContainer />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
