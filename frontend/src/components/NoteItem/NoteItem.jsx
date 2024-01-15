import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import NoteActionButtonContainer from '../NoteActionButton/NoteActionButtonContainer';
import TagItemContainer from '../TagItem/TagItemContainer';
import styles from './NoteItem.module.css';

const NoteItem = ({ createdAt, content, tags, id, active }) => {
	const backgroundColor = active ? 'white' : '#ffe4c4';
	return (
		<Box sx={{ width: 280, position: 'relative' }}>
			<Card sx={{ height: 300, backgroundColor }} variant='outlined'>
				<CardContent sx={{ position: 'relative', height: 300 }}>
					<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
						{createdAt}
					</Typography>
					<Typography variant='body2'>{content}</Typography>
					<div className={styles.TagsContainer}>
						{tags.map(tag => (
							<TagItemContainer key={tag.id} label={tag.name} />
						))}
					</div>
				</CardContent>
				<CardActions style={{ position: 'absolute', bottom: 16, right: 16 }}>
					<NoteActionButtonContainer id={id} active={active} />
				</CardActions>
			</Card>
		</Box>
	);
};

NoteItem.propTypes = {
	createdAt: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.object).isRequired,
	id: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
};

export default NoteItem;
