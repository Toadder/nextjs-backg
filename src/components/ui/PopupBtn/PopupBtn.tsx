'use client'

import { PopupContext } from 'context/PopupContext/PopupContext'
import { FC, useContext } from 'react'

import { IPopupBtn } from './popup-btn.interface'

const PopupBtn: FC<IPopupBtn> = ({ children, popupName, className = '' }) => {
	const { setActivePopup } = useContext(PopupContext)

	return (
		<div className={className} onClick={() => setActivePopup(popupName)}>
			{children}
		</div>
	)
}

export default PopupBtn
