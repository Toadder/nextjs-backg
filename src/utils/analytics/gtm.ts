// @ts-nocheck
import { INIT_DELAY } from './analytics.constant'

const initGTMScript = (): void => {
	if (window.didGTMInit) return

	window.didGTMInit = true
	const script = document.createElement('script')
	script.type = 'text/javascript'
	script.id = 'gtm-id'
	script.async = true
	script.src = `https://www.googletagmanager.com/gtag/js?id=G-${process.env.GTAG_ID}`
	script.onload = () => {
		window.dataLayer = window.dataLayer || []
		function gtag() {
			window.dataLayer.push(arguments)
		}
		gtag('js', new Date())
		gtag('config', `G-${process.env.GTAG_ID}`)
	}

	document.head.appendChild(script)
}

export const initGTMScriptOnEvent = (event: Event) => {
	initGTMScript()
	event.currentTarget?.removeEventListener(event.type, initGTMScriptOnEvent)
}

export const initGTMScriptWithDelay = () => {
	return setTimeout(() => {
		initGTMScript()
		document.removeEventListener('scroll', initGTMScriptOnEvent)
		document.removeEventListener('mouseover', initGTMScriptOnEvent)
		document.removeEventListener('touchstart', initGTMScriptOnEvent)
	}, INIT_DELAY)
}
