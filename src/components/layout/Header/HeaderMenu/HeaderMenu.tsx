import cn from 'clsx'
import { FC } from 'react'

import { IHeaderMenu } from '../header.interface'

import HeaderItem from './HeaderItem'
import styles from './HeaderMenu.module.scss'

const HeaderMenu: FC<IHeaderMenu> = ({ menu, isOpened, hideMenu }) => {
	if (!menu.length) return

	return (
		<div
			className={cn(styles.menu, {
				[styles.active]: isOpened
			})}
		>
			<div className={styles.inner}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{menu.map(({ node }) => (
							<HeaderItem
								key={node.id}
								label={node.label}
								path={node.path}
								childItems={node.childItems}
								hideMenu={hideMenu}
							/>
						))}
					</ul>
				</nav>
			</div>
			<div className={styles.backdrop} onClick={hideMenu}></div>
		</div>
	)
}

export default HeaderMenu
