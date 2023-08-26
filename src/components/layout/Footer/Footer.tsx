import { FC } from 'react';

import styles from './Footer.module.scss';
import FooterContent from './FooterContent/FooterContent';
import FooterMap from './FooterMap/FooterMap';

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<FooterContent />
				<FooterMap />
			</div>
		</footer>
	);
};

export default Footer;
