import cn from 'clsx';
import Link from 'next/link';
import { FC, LegacyRef } from 'react';
import SlideToggle from 'react-slide-toggle';

import { useActivePath } from '@/hooks/useActivePath';

import styles from './HeaderMenu.module.scss';
import { IHeaderSubmenu } from './menu.interface';

const HeaderSubmenu: FC<IHeaderSubmenu> = ({
	items,
	isMobileDevice,
	toggleEvent,
	onClickHandler
}) => {
	const checkActivePath = useActivePath();

	const itemsJsx = items.map((item) => (
		<li key={item.name} className={styles.subitem}>
			<Link
				onClick={() => onClickHandler()}
				href={item.path}
				className={cn(styles.sublink, {
					[styles.active]: checkActivePath(item.path)
				})}
			>
				<span>{item.name}</span>
			</Link>
		</li>
	));

	return isMobileDevice ? (
		<SlideToggle toggleEvent={toggleEvent} duration={400} collapsed={true}>
			{({
				setCollapsibleElement
			}: {
				setCollapsibleElement: LegacyRef<HTMLUListElement>;
			}) => (
				<ul className={styles.sublist} ref={setCollapsibleElement}>
					{itemsJsx}
				</ul>
			)}
		</SlideToggle>
	) : (
		<ul className={styles.sublist}>{itemsJsx}</ul>
	);
};

export default HeaderSubmenu;
