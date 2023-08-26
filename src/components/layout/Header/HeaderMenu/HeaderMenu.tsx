import cn from 'clsx';
import { FC } from 'react';

import HeaderItem from './HeaderItem';
import styles from './HeaderMenu.module.scss';
import { menuItems } from './menu.data';
import { IHeaderMenu } from './menu.interface';

const HeaderMenu: FC<IHeaderMenu> = ({ isOpened, hideMenu }) => {
	return (
		<div
			className={cn(styles.menu, {
				[styles.active]: isOpened
			})}
		>
			<div className={styles.inner}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{menuItems.map((item) => (
							<HeaderItem key={item.name} {...item} hideMenu={hideMenu} />
						))}
					</ul>
				</nav>
			</div>
			<div className={styles.backdrop} onClick={hideMenu}></div>
		</div>
	);
};

export default HeaderMenu;
