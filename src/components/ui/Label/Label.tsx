import cn from 'clsx';
import { FC } from 'react';

import styles from './Label.module.scss';

interface ILabel {
	text: string;
	className?: string;
}

const Label: FC<ILabel> = ({ text, className = '' }) => {
	return (
		<div className={cn(styles.label, className)}>
			<div className={styles.text}>{text}</div>
		</div>
	);
};

export default Label;
