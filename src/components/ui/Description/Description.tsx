import cn from 'clsx';
import { FC, ReactNode } from 'react';

import styles from './Descripiton.module.scss';

interface IDescription {
	children: ReactNode;
	className?: string;
}

const Description: FC<IDescription> = ({ children, className = '' }) => {
	return <div className={cn(styles.description, className)}>{children}</div>;
};

export default Description;
