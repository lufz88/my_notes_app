import { useState } from 'react';
import TagMenu from './TagMenu';

const TagMenuContainer = () => {
	const tags = ['chocolate', 'compras', 'ventas', 'ravioles', 'lavanderia'];
	const [anchorEl, setAnchorEl] = useState(false);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(false);
	};

	return (
		<TagMenu
			handleClick={handleClick}
			open={open}
			anchorEl={anchorEl}
			handleClose={handleClose}
			tags={tags}
		/>
	);
};

export default TagMenuContainer;
