import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const TagMenu = ({ handleClick, open, anchorEl, handleClose, tags, handleTagClick }) => {
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
					<Link
						key={tag.id}
						onClick={() => handleTagClick(tag.name)}
						to={`/tags/${tag.name}`}
						style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
						<MenuItem>{tag.name}</MenuItem>
					</Link>
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
	handleTagClick: PropTypes.func.isRequired,
	tags: PropTypes.array.isRequired,
};

export default TagMenu;
