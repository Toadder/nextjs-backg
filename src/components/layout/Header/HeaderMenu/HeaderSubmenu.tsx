import cn from 'clsx';
import Link from 'next/link';
import { FC, LegacyRef } from 'react';
import SlideToggle from 'react-slide-toggle';

import { useActivePath } from '@/hooks/useActivePath';

import { IHeaderSubmenu } from '../header.interface';

import styles from './HeaderMenu.module.scss';

const HeaderSubmenu: FC<IHeaderSubmenu> = ({
	childItems,
	isMobileDevice,
	toggleEvent,
	onClickHandler
}) => {
	if (!childItems.length) return;

	const checkActivePath = useActivePath();

	const itemsJsx = childItems.map(({ node }) => {
		if (!node?.label || !node?.path) return;

		return (
			<li key={node.id} className={styles.subitem}>
				<Link
					onClick={() => onClickHandler()}
					href={node?.path}
					className={cn(styles.sublink, {
						[styles.active]: checkActivePath(node?.path)
					})}
				>
					<span>{node.label}</span>
				</Link>
			</li>
		);
	});

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
