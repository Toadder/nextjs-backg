import { TActivePopup } from 'context/PopupContext/popup-context.interface'
import { ReactNode } from 'react'

export interface IPopupBtn {
	children: ReactNode
	className?: string
	popupName: TActivePopup
}
