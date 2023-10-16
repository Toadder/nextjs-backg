import cn from 'clsx'
import Link from 'next/link'
import { FC, LegacyRef } from 'react'
import SlideToggle from 'react-slide-toggle'

import { useActivePath } from '@/hooks/useActivePath'

import { IHeaderSubmenu } from '../header.interface'

import styles from './HeaderMenu.module.scss'

const HeaderSubmenu: FC<IHeaderSubmenu> = ({
	menu,
	isMobileDevice,
	toggleEvent,
	onClickHandler
}) => {
	if (!menu.length) return

	const checkActivePath = useActivePath()

	const itemsJsx = menu.map(({ node }) => {
		if (!node?.label || !node?.path) return

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
		)
	})

	return isMobileDevice ? (
		<SlideToggle toggleEvent={toggleEvent} duration={400} collapsed={true}>
			{({
				setCollapsibleElement
			}: {
				setCollapsibleElement: LegacyRef<HTMLUListElement>
			}) => (
				<ul className={styles.sublist} ref={setCollapsibleElement}>
					{itemsJsx}
				</ul>
			)}
		</SlideToggle>
	) : (
		<ul className={styles.sublist}>{itemsJsx}</ul>
	)
}

export default HeaderSubmenu
