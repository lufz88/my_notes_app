import { useContext, useEffect, useState } from 'react';
import TagMenu from './TagMenu';
import { Context } from '../../context/Context';

const TagMenuContainer = () => {
	const { tags, setTags, getTags } = useContext(Context);

	useEffect(() => {
		const fetchTags = async () => {
			setTags(await getTags());
		};
		fetchTags();
	}, []);

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
