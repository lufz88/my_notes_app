import { useContext, useState } from 'react';
import NoteActionButton from './NoteActionButton';
import { Context } from '../../context/Context';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const NoteActionButtonContainer = ({ id, active }) => {
	const { deleteNote, editNote } = useContext(Context);
	const [open, setOpen] = useState(false);
	const [tagInput, setTagInput] = useState('');
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigate = useNavigate();

	const handleDelete = async () => {
		await deleteNote(id);
		navigate('/');
	};

	const handleEdit = async () => {
		handleOpen();
	};

	const modifyNote = async () => {
		if (tagInput.trim() !== '') {
			try {
				const modifiedNote = await editNote(id, { content: tagInput.trim() });
				if (modifiedNote) {
					handleClose();
					navigate('/');
				}
			} catch (error) {
				console.error('Error adding tag:', error);
			}
		}
	};

	const handleTagInputChange = event => {
		setTagInput(event.target.value);
	};

	const handleArchive = async () => {
		const change = active ? false : true;
		await editNote(id, { active: change });
	};

	const actions = [
		{ icon: <EditIcon />, name: 'Edit', onClick: handleEdit },
		{ icon: <ArchiveIcon />, name: 'Archive / Unarchive', onClick: handleArchive },
		{ icon: <DeleteIcon />, name: 'Delete', onClick: handleDelete },
	];
	return (
		<NoteActionButton
			actions={actions}
			open={open}
			handleClose={handleClose}
			handleTagInputChange={handleTagInputChange}
			modifyNote={modifyNote}
		/>
	);
};

NoteActionButtonContainer.propTypes = {
	id: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
};

export default NoteActionButtonContainer;
