import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const actions = [
	{ icon: <EditIcon />, name: 'Edit' },
	{ icon: <ArchiveIcon />, name: 'Archive' },
	{ icon: <DeleteIcon />, name: 'Delete' },
];

const NoteActionButton = () => {
	return (
		<Box sx={{ height: 200, transform: 'translateZ(0px)', flexGrow: 1 }}>
			<SpeedDial
				ariaLabel='SpeedDial basic example'
				sx={{ position: 'absolute', bottom: 16, right: 16 }}
				icon={<SpeedDialIcon />}>
				{actions.map(action => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
					/>
				))}
			</SpeedDial>
		</Box>
	);
};

export default NoteActionButton;
