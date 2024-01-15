import { useContext, useEffect } from 'react';
import NoteList from './NoteList';
import { Context } from '../../context/Context';
import PropTypes from 'prop-types';

const NoteListContainer = ({ option }) => {
	const { notes, setNotes, getNotes } = useContext(Context);

	useEffect(() => {
		const fetchNotes = async () => {
			const allNotes = await getNotes();
			console.log(allNotes);
			if (option === 'all') {
				setNotes(allNotes);
				return;
			}

			if (option === 'active') {
				const activeNotes = allNotes.filter(note => note.active === true);
				setNotes(activeNotes);
				return;
			}

			if (option === 'archive') {
				const archiveNotes = allNotes.filter(note => note.active === false);
				setNotes(archiveNotes);
				return;
			}
		};
		fetchNotes();
	}, [option]);

	return <NoteList notes={notes} />;
};

NoteListContainer.propTypes = {
	option: PropTypes.string.isRequired,
};

export default NoteListContainer;
