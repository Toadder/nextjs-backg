import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import { handleScrollBarPadding } from '@/utils/window/handleScrollBarPadding'

import { IPopupContext, TActivePopup } from './popup-context.interface'
import { APP_EVENT_WIDGET_CLASS_NAME } from '@/constants/appEvent'

export const PopupContext = createContext<IPopupContext>({
	activePopup: '',
	setActivePopup: () => {}
})

export const PopupProvider: FC<PropsWithChildren> = ({ children }) => {
	const [activePopup, setActivePopup] = useState<TActivePopup>('')

	const updateActivePopup = (popupName: TActivePopup) =>
		setActivePopup(popupName)

	const popupHandler = (isMounted: boolean) => {
		const scrollBarWidth: number =
			window.innerWidth - document.documentElement.clientWidth
		const layout: HTMLElement | null = document.querySelector('.layout')
		const fixedElements: HTMLElement[] = Array.from(
			document.querySelectorAll(
				`.lock-padding, .${APP_EVENT_WIDGET_CLASS_NAME}`
			)
		)

		if (!layout) return

		if (isMounted && activePopup.length) {
			document.body.classList.add('lock')
			handleScrollBarPadding(scrollBarWidth, layout, ...fixedElements)
		} else {
			setTimeout(() => {
				document.body.classList.remove('lock')
				handleScrollBarPadding(0, layout, ...fixedElements)
			}, 400)
		}
	}

	useEffect(() => {
		let isMounted = true
		popupHandler(isMounted)

		return () => {
			isMounted = false
		}
	}, [activePopup])

	return (
		<PopupContext.Provider
			value={{
				activePopup,
				setActivePopup: updateActivePopup
			}}
		>
			{children}
		</PopupContext.Provider>
	)
}
