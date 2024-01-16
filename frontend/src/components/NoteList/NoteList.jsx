import PropTypes from 'prop-types';
import NoteItemContainer from '../NoteItem/NoteItemContainer';
import styles from './NoteList.module.css';
const NoteList = ({ notes }) => {
	return (
		<div className={styles.NotesContainer}>
			{notes.length >= 1 ? (
				notes.map(note => {
					return <NoteItemContainer key={note.id} note={note} />;
				})
			) : (
				<h2 style={{ color: '#fffefef0' }}>There are no notes with that tag</h2>
			)}
		</div>
	);
};

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
