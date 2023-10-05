import { FC } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import PopupBtn from '@/components/ui/PopupBtn/PopupBtn';

import styles from './Header.module.scss';

const HeaderMessenger: FC = () => (
	<PopupBtn className={styles.messenger} popupName="messenger">
		<FontAwesomeIcon name="AiFillMessage" />
	</PopupBtn>
);

export default HeaderMessenger;
