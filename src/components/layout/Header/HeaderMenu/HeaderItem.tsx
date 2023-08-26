'use client';

import cn from 'clsx';
import Link from 'next/link';
import { FC, useState } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import { useActivePath } from '@/hooks/useActivePath';
import {useMediaQuery} from '@/hooks/useMediaQuery';

import styles from './HeaderMenu.module.scss';
import HeaderSubmenu from './HeaderSubmenu';
import { IHeaderItemContent, IHeaderItemInteractive } from './menu.interface';

const HeaderItemContent: FC<IHeaderItemContent> = ({
	name,
	path,
	items,
	onClickHandler,
	isSubmenuShown
}) => {
	const checkActivePath = useActivePath();

	if (items?.length) {
		return (
			<div
				className={cn(styles.link, {
					[styles.toggled]: isSubmenuShown,
					[styles.active]: checkActivePath(path, items)
				})}
				onClick={() => onClickHandler(items.length)}
			>
				<span>{name}</span>
				<FontAwesomeIcon name="FaCaretDown" />
			</div>
		);
	}

	return (
		<Link
			href={path}
			target={path.startsWith('/') ? '_self' : '_blank'}
			className={cn(styles.link, {
				[styles.active]: checkActivePath(path)
			})}
			onClick={() => onClickHandler()}
		>
			<span>{name}</span>
		</Link>
	);
};

const HeaderItem: FC<IHeaderItemInteractive> = ({
	name,
	path,
	items,
	hideMenu
}) => {
	const isMobileDevice = useMediaQuery('(max-width: 80em)');
	const [isSubmenuShown, setIsSubmenuShown] = useState<boolean>(false);
	const [toggleEvent, setToggleEvent] = useState<Date | number>(0);

	const onClickHandler = (itemsLength?: number): void => {
		if (!isMobileDevice) return;
		!itemsLength && hideMenu();
		setIsSubmenuShown((prevState) => !prevState);
		setToggleEvent(Date.now());
	};

	return (
		<li className={styles.item}>
			<HeaderItemContent
				name={name}
				path={path}
				items={items}
				isSubmenuShown={isSubmenuShown}
				onClickHandler={onClickHandler}
			/>
			{items?.length ? (
				<HeaderSubmenu
					isMobileDevice={isMobileDevice}
					onClickHandler={onClickHandler}
					toggleEvent={toggleEvent}
					items={items}
				/>
			) : null}
		</li>
	);
};

export default HeaderItem;
