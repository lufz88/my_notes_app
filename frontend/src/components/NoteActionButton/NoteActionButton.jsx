import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import PropTypes from 'prop-types';

const NoteActionButton = ({ actions }) => {
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
		</Box>
	);
};

NoteActionButton.propTypes = {
	actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteActionButton;
