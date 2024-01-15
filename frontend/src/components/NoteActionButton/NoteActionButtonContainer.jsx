import { useContext } from 'react';
import NoteActionButton from './NoteActionButton';
import { Context } from '../../context/Context';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';

const NoteActionButtonContainer = ({ id, active }) => {
	const { deleteNote, editNote } = useContext(Context);

	const handleDelete = async () => {
		await deleteNote(id);
	};

	const handleEdit = async () => {};

	const handleArchive = async () => {
		const change = active ? false : true;
		await editNote(id, { active: change });
	};

	const actions = [
		{ icon: <EditIcon />, name: 'Edit', onClick: handleEdit },
		{ icon: <ArchiveIcon />, name: 'Archive / Unarchive', onClick: handleArchive },
		{ icon: <DeleteIcon />, name: 'Delete', onClick: handleDelete },
	];
	return <NoteActionButton actions={actions} />;
};

NoteActionButtonContainer.propTypes = {
	id: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
};

export default NoteActionButtonContainer;
