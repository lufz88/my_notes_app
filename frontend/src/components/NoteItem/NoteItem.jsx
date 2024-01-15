import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import NoteActionButtonContainer from '../NoteActionButton/NoteActionButtonContainer';
import TagItemContainer from '../TagItem/TagItemContainer';
import styles from './NoteItem.module.css';

const NoteItem = ({ fecha, content, tags }) => {
	return (
		<Box sx={{ minWidth: 275, maxWidth: 350 }}>
			<Card sx={{ height: 300 }} variant='outlined'>
				<CardContent sx={{ position: 'relative' }}>
					<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
						{fecha}
					</Typography>
					<Typography variant='body2'>{content}</Typography>
					<div className={styles.TagsContainer}>
						{tags.map(tag => (
							<TagItemContainer key={tag} label={tag} />
						))}
					</div>
				</CardContent>
				<CardActions>
					<NoteActionButtonContainer />
				</CardActions>
			</Card>
		</Box>
	);
};

NoteItem.propTypes = {
	fecha: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NoteItem;
