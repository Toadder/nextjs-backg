'use client';

import { PopupContext } from 'context/PopupContext/PopupContext';
import { TActivePopup } from 'context/PopupContext/popup-context.interface';
import { FC, PropsWithChildren, useContext } from 'react';

interface IPopupBtn extends PropsWithChildren {
	className?: string;
	popupName: TActivePopup;
}

const PopupBtn: FC<IPopupBtn> = ({ children, popupName, className = '' }) => {
	const { setActivePopup } = useContext(PopupContext);
	return (
		<div className={className} onClick={() => setActivePopup(popupName)}>
			{children}
		</div>
	);
};

export default PopupBtn;
