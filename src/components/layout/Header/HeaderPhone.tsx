import { FC, memo } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import { convertPhone } from '@/utils/data/convertPhone';

import styles from './Header.module.scss';
import { IHeaderPhone } from './header.interface';

const HeaderPhone: FC<IHeaderPhone> = ({ phone }) => {
	if (!phone?.length) return;

	const cleanedPhoneNumber: string = convertPhone(phone);

	return (
		<div className={styles.phone}>
			<a href={`tel:${cleanedPhoneNumber}`}>
				<span>{phone}</span>
				<FontAwesomeIcon name="FaPhoneAlt" />
			</a>
		</div>
	);
};

export default memo(HeaderPhone);
