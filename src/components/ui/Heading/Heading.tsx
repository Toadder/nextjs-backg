import cn from 'clsx';
import { FC, HTMLProps, ReactNode } from 'react';

import styles from './Heading.module.scss';

interface IHeading extends HTMLProps<HTMLTitleElement> {
	children?: ReactNode;
	htmlContent?: string;
	type?: 'h1' | 'h2';
	className?: string;
}

const Heading: FC<IHeading> = ({
	children,
	htmlContent,
	type = 'h2',
	className = ''
}) => {
	if (children) {
		return type === 'h1' ? (
			<h1 className={cn(styles.heading, className)}>{children}</h1>
		) : (
			<h2 className={cn(styles.heading, className)}>{children}</h2>
		);
	}

	if (!htmlContent?.length) return;

	return type === 'h1' ? (
		<h1
			className={cn(styles.heading, className)}
			dangerouslySetInnerHTML={{ __html: htmlContent }}
		/>
	) : (
		<h2
			className={cn(styles.heading, className)}
			dangerouslySetInnerHTML={{ __html: htmlContent }}
		/>
	);
};

export default Heading;
