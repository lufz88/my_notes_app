import PropTypes from 'prop-types';
import NoteItemContainer from '../NoteItem/NoteItemContainer';
import styles from './NoteList.module.css';
const NoteList = ({ notes }) => {
	return (
		<div className={styles.NotesContainer}>
			{notes.map(note => {
				return <NoteItemContainer key={note.id} note={note} />;
			})}
		</div>
	);
};

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
