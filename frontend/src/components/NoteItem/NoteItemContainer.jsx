import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

const NoteItemContainer = ({ note }) => {
	const { createdAt, content, tags, id, active } = note;
	return <NoteItem createdAt={createdAt} content={content} tags={tags} id={id} active={active} />;
};

NoteItemContainer.propTypes = {
	note: PropTypes.object.isRequired,
};

export default NoteItemContainer;
