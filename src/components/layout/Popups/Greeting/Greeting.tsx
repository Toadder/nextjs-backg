import { FC, memo } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import PopupCard from '@/components/ui/PopupCard/PopupCard';

import styles from './Greeting.module.scss';

const Greeting: FC = () => {
	return (
		<PopupCard currentPopup="greeting" className={styles.root}>
			<div className={styles.icon}>
				<FontAwesomeIcon name="FaCheckCircle" />
			</div>
			<div className={styles.title}>Успех!</div>
			<p className={styles.text}>
				Форма успешно отправлена. В ближайшее время мы с Вами свяжемся.
			</p>
		</PopupCard>
	);
};

export default memo(Greeting);
