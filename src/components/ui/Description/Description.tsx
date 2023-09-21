import cn from 'clsx';
import { FC, ReactNode } from 'react';

import styles from './Descripiton.module.scss';

interface IDescription {
	children?: ReactNode;
	htmlContent?: string;
	className?: string;
}

const Description: FC<IDescription> = ({
	children,
	htmlContent,
	className = ''
}) => {
	if (children) {
		return <div className={cn(styles.description, className)}>{children}</div>;
	}

	if (!htmlContent?.length) return;

	return (
		<div
			className={cn(styles.description, className)}
			dangerouslySetInnerHTML={{ __html: htmlContent }}
		/>
	);
};

export default Description;
