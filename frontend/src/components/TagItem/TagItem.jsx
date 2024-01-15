import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const TagItem = ({ label }) => {
	return (
		<Stack direction='row' spacing={1}>
			<Chip label={label} />
		</Stack>
	);
};

TagItem.propTypes = {
	label: PropTypes.string.isRequired,
};

export default TagItem;
