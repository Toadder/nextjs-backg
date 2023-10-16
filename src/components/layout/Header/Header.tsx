'use client'

import cn from 'clsx'
import { FC, useState } from 'react'

import styles from './Header.module.scss'
import HeaderBurger from './HeaderBurger/HeaderBurger'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderMessenger from './HeaderMessenger'
import HeaderPhone from './HeaderPhone'
import { IHeaderData } from './header.interface'

const Header: FC<{ data: IHeaderData }> = ({ data }) => {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)

	const toggleMenu = (): void => {
		setIsMenuOpened(prevState => !prevState)
	}

	const hideMenu = (): void => {
		setIsMenuOpened(false)
	}

	return (
		<header className={cn(styles.header, 'lock-padding')}>
			<div className={styles.inner}>
				<HeaderLogo hideMenu={hideMenu} logo={data.fields.logo} />
				<HeaderMenu
					menu={data?.menu}
					isOpened={isMenuOpened}
					hideMenu={hideMenu}
				/>
				<div className={styles.actions}>
					<HeaderPhone phone={data.fields.phone || ''} />
					<HeaderMessenger />
					<HeaderBurger isOpened={isMenuOpened} toggleIsOpened={toggleMenu} />
				</div>
			</div>
		</header>
	)
}

export default Header
