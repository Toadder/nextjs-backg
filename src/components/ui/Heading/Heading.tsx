import { FC, ReactNode } from 'react';

import styles from './Heading.module.scss';

import cn from 'clsx';

interface IHeading {
	children: ReactNode;
	type?: 'h1' | 'h2';
	className?: string;
}

const Heading: FC<IHeading> = ({ children, type = 'h2', className = '' }) => {
	return type === 'h1' ? (
		<h1 className={cn(styles.heading, className)}>{children}</h1>
	) : (
		<h2 className={cn(styles.heading, className)}>{children}</h2>
	);
};

export default Heading;
