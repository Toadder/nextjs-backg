'use client';

import cn from 'clsx';
import { PopupContext } from 'context/PopupContext/PopupContext';
import { TActivePopup } from 'context/PopupContext/popup-context.interface';
import { PropsWithChildren, useContext } from 'react';

import FontAwesomeIcon from '../Icons/FontAwesomeIcon';

import styles from './PopupCard.module.scss';

interface IPopupCard extends PropsWithChildren {
	currentPopup: TActivePopup;
	className?: string;
}

const PopupCard = ({ children, currentPopup, className = '' }: IPopupCard) => {
	const { activePopup, setActivePopup } = useContext(PopupContext);
	const isVisible: boolean = currentPopup === activePopup;

	const closePopup = () => setActivePopup('');

	return (
		<div
			className={cn(styles.card, {
				[styles.active]: isVisible
			})}
		>
			<div className={styles.inner}>
				<div className={cn(styles.body, className)}>
					{children}
					<button type="button" onClick={closePopup} className={styles.close}>
						<FontAwesomeIcon name="FaXmark" />
					</button>
				</div>
			</div>
			<div onClick={closePopup} className={styles.backdrop} />
		</div>
	);
};

export default PopupCard;
