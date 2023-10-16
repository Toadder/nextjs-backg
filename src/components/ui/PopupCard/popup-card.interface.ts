import { TActivePopup } from 'context/PopupContext/popup-context.interface'
import { ReactNode } from 'react'

export interface IPopupCard {
	children: ReactNode
	currentPopup: TActivePopup
	className?: string
}
