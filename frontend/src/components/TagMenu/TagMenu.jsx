import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const TagMenu = ({ handleClick, open, anchorEl, handleClose, tags }) => {
	return (
		<div>
			<Button
				id='basic-button'
				color='inherit'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}>
				Search by tag
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}>
				{tags.map(tag => (
					<MenuItem key={tag} onClick={handleClose}>
						{tag}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

TagMenu.propTypes = {
	handleClick: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	anchorEl: PropTypes.any.isRequired,
	handleClose: PropTypes.func.isRequired,
	tags: PropTypes.array.isRequired,
};

export default TagMenu;
