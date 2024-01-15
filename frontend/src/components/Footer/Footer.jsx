import styles from './Footer.module.css';
import Typography from '@mui/material/Typography';

const Footer = () => {
	return (
		<div className={styles.Footer}>
			<Typography variant='body1' className={styles.Text}>
				Created by Lucas Frazzetta
			</Typography>
		</div>
	);
};

export default Footer;
