import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

import PropTypes from 'prop-types';
import { Modal } from '@mui/material';

const NoteActionButton = ({ actions, open, handleClose, handleTagInputChange, modifyNote }) => {
	return (
		<Box sx={{ height: 200, transform: 'translateZ(0px)', flexGrow: 1 }}>
			<SpeedDial
				ariaLabel='SpeedDial basic example'
				sx={{ position: 'absolute', bottom: 0, right: 0 }}
				icon={<SpeedDialIcon />}>
				{actions.map(action => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={action.onClick}
					/>
				))}
			</SpeedDial>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box
					sx={{
						position: 'absolute',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24,
						p: 4,
					}}>
					<TextField
						sx={{ width: 320, marginBottom: 2 }}
						id='note-field'
						label='Modify your note'
						multiline
						maxRows={6}
						onChange={handleTagInputChange}
					/>
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<Button onClick={handleClose}>Close</Button>
						<Button onClick={modifyNote}>Modify</Button>
					</div>
				</Box>
			</Modal>
		</Box>
	);
};

NoteActionButton.propTypes = {
	actions: PropTypes.arrayOf(PropTypes.object).isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleTagInputChange: PropTypes.func.isRequired,
	modifyNote: PropTypes.func.isRequired,
};

export default NoteActionButton;
