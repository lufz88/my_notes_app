import TagItem from './TagItem';
import PropTypes from 'prop-types';

const TagItemContainer = ({ label }) => {
	return <TagItem label={label} />;
};

TagItemContainer.propTypes = {
	label: PropTypes.string.isRequired,
};

export default TagItemContainer;
