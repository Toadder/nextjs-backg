import cn from 'clsx';
import { FC } from 'react';

import styles from './Spinner.module.scss';

const Spinner: FC<{
	className?: string;
}> = ({ className = 'border-orange border-4 h-10 w-10' }) => {
	return <div className={styles.wrapper}>
		<div className={cn(styles.spinner, className)}></div>
	</div>;
};

export default Spinner;
