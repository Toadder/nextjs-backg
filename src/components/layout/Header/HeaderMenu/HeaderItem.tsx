'use client'

import cn from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon'

import { useActivePath } from '@/hooks/useActivePath'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { IHeaderItem, IHeaderItemInner } from '../header.interface'

import styles from './HeaderMenu.module.scss'
import HeaderSubmenu from './HeaderSubmenu'

const HeaderItemInner: FC<IHeaderItemInner> = ({
	label,
	path,
	childItems,
	onClickHandler,
	isSubmenuShown
}) => {
	if (!label || !path) return

	const checkActivePath = useActivePath()

	if (childItems?.edges?.length) {
		return (
			<div
				className={cn(styles.link, {
					[styles.toggled]: isSubmenuShown,
					[styles.active]: checkActivePath(path)
				})}
			>
				<span>{label}</span>
				<div className={styles.icon} onClick={() => onClickHandler(true)}>
					<FontAwesomeIcon name="FaCaretDown" />
				</div>
				<Link
					className={styles.overlay}
					href={path}
					onClick={() => onClickHandler()}
				/>
			</div>
		)
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
			<span>{label}</span>
		</Link>
	)
}

const HeaderItem: FC<IHeaderItem> = ({ label, path, childItems, hideMenu }) => {
	const isMobileDevice = useMediaQuery('(max-width: 80em)')
	const [isSubmenuShown, setIsSubmenuShown] = useState<boolean>(false)
	const [toggleEvent, setToggleEvent] = useState<Date | number>(0)

	const onClickHandler = (isTrigger = false): void => {
		if (!isMobileDevice) return

		if (isTrigger) {
			setIsSubmenuShown(prevState => !prevState)
			setToggleEvent(Date.now())
		} else {
			hideMenu()

			if (isSubmenuShown) {
				setIsSubmenuShown(false)
				setToggleEvent(Date.now())
			}
		}
	}

	return (
		<li className={styles.item}>
			<HeaderItemInner
				label={label}
				path={path}
				childItems={childItems}
				isSubmenuShown={isSubmenuShown}
				onClickHandler={onClickHandler}
			/>
			{childItems?.edges?.length ? (
				<HeaderSubmenu
					isMobileDevice={isMobileDevice}
					onClickHandler={onClickHandler}
					toggleEvent={toggleEvent}
					menu={childItems.edges}
				/>
			) : null}
		</li>
	)
}

export default HeaderItem
