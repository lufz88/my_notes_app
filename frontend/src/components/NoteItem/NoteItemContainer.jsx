import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

const NoteItemContainer = ({ note }) => {
	const { fecha, content, tags } = note;
	return <NoteItem fecha={fecha} content={content} tags={tags} />;
};

NoteItemContainer.propTypes = {
	note: PropTypes.object.isRequired,
};

export default NoteItemContainer;
