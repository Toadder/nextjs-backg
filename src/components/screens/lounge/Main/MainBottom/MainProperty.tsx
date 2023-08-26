'use client';

import cn from 'clsx';
import { FC, useState } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import { FontAwesomeIconName } from '@/shared/types/icon.types';

import styles from './MainBottom.module.scss';

interface IMainProperty {
	icon: FontAwesomeIconName;
	title: string;
	excerpt: string;
	text: string;
}

const MainProperty: FC<IMainProperty> = ({ icon, title, text, excerpt }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);

	const toggleIsOpened = (): void => {
		setIsOpened((prevState) => !prevState);
	};

	return (
		<div className={styles.property} onClick={toggleIsOpened}>
			<div className={styles.preview}>
				<FontAwesomeIcon name={icon} />
				<div className={styles.title}>{title}</div>
				<p className={styles.text}>{excerpt}</p>
			</div>
			<div
				className={cn(styles.content, {
					[styles.active]: isOpened
				})}
			>
				<div className={styles.title}>{title}</div>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	);
};

export default MainProperty;
