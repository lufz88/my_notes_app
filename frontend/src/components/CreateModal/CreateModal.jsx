import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { TextField } from '@mui/material';
import { Context } from '../../context/Context';
import TagItemContainer from '../TagItem/TagItemContainer';
import { useNavigate } from 'react-router-dom';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-around',
	transform: 'translate(-50%, -50%)',
	height: 250,
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

function ChildModal() {
	const { addTag, newNoteTags, setNewNoteTags } = useContext(Context);
	const [open, setOpen] = useState(false);
	const [tagInput, setTagInput] = useState('');

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleTagInputChange = event => {
		setTagInput(event.target.value);
	};

	const handleAddTag = async () => {
		if (tagInput.trim() !== '') {
			try {
				const newTag = await addTag(tagInput.trim().toLowerCase());
				const isTaginArray = newNoteTags.find(tag => tag.id === newTag.id);

				if (!isTaginArray) {
					setNewNoteTags([...newNoteTags, newTag]);
				}

				setTagInput('');

				handleClose();
			} catch (error) {
				console.error('Error adding tag:', error);
			}
		}
	};

	return (
		<>
			<Button onClick={handleOpen}>Add tag</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='child-modal-title'
				aria-describedby='child-modal-description'>
				<Box sx={{ ...style, width: 300, height: 150 }}>
					<TextField
						sx={{ width: 250, marginBottom: 2 }}
						id='tag-field'
						label='Add tag'
						multiline
						maxRows={6}
						onChange={handleTagInputChange}
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							width: 320,
						}}>
						<Button onClick={handleClose}>Close</Button>
						<Button onClick={handleAddTag}>Add</Button>
					</div>
				</Box>
			</Modal>
		</>
	);
}

export default function CreateModal() {
	const [open, setOpen] = useState(false);
	const { newNoteTags, setNewNoteTags, createNote } = useContext(Context);
	const [tagInput, setTagInput] = useState('');
	const navigate = useNavigate();

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setNewNoteTags([]);

		setOpen(false);
	};

	const handleTagInputChange = event => {
		setTagInput(event.target.value);
	};

	const handleCreate = async () => {
		if (tagInput.trim() !== '') {
			try {
				const tags = newNoteTags.map(tag => tag.name);
				const data = { content: tagInput.trim(), tags: tags || [] };
				await createNote(data);

				setTagInput('');
				handleClose();
				navigate('/');
			} catch (error) {
				console.error('Error adding tag:', error);
			}
		}
	};

	return (
		<div>
			<Button color='inherit' onClick={handleOpen}>
				Create Note
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='parent-modal-title'
				aria-describedby='parent-modal-description'>
				<Box sx={{ ...style, width: 400 }}>
					<TextField
						sx={{ width: 320, marginBottom: 2 }}
						id='note-field'
						label='Create your note'
						multiline
						maxRows={6}
						onChange={handleTagInputChange}
					/>
					<div
						style={{
							width: 300,
							display: 'flex',
							flexWrap: 'wrap',
							gap: 4,
						}}>
						{newNoteTags.length >= 1 &&
							newNoteTags.map(tag => {
								return <TagItemContainer key={tag.id} label={tag.name} />;
							})}
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							width: 320,
						}}>
						<ChildModal />
						<Button onClick={handleClose}>Close</Button>
						<Button onClick={handleCreate}>Create</Button>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
