import { FC, memo } from 'react';

import styles from './Header.module.scss';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon'

const HeaderPhone: FC = () => {
	return (
		<div className={styles.phone}>
			<a href="tel:74994554504">
				<span>+7 (499) 455-45-04</span>
				<FontAwesomeIcon name='FaPhoneAlt' />
			</a>
		</div>
	);
};

export default memo(HeaderPhone);
