import cn from 'clsx';
import { FC } from 'react';

import { IHeaderBurger } from '../header.interface';

import styles from './HeaderBurger.module.scss';

const HeaderBurger: FC<IHeaderBurger> = ({ isOpened, toggleIsOpened }) => {
	return (
		<div
			className={cn(styles.burger, {
				[styles.active]: isOpened
			})}
			onClick={toggleIsOpened}
		>
			<span></span>
		</div>
	);
};

export default HeaderBurger;
