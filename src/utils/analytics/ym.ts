// @ts-nocheck
import { INIT_DELAY } from './analytics.constant'

const initYMScript = (): void => {
	if (window.didYMInit) return

	window.didYMInit = true
	const script = document.createElement('script')
	script.type = 'text/javascript'
	script.id = 'ym-id'
	script.async = true
	script.innerHTML = `
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
		m[i].l=1*new Date();
		for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
		k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

		ym(${process.env.YM_ID}, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true
		});
	`
	script.onload = () => console.log('loaded')

	document.head.appendChild(script)
}

export const initYMScriptOnEvent = (event: Event) => {
	initYMScript()
	event.currentTarget?.removeEventListener(event.type, initYMScriptOnEvent)
}

export const initYMScriptWithDelay = () => {
	return setTimeout(() => {
		initYMScript()
		document.removeEventListener('scroll', initYMScriptOnEvent)
		document.removeEventListener('mouseover', initYMScriptOnEvent)
		document.removeEventListener('touchstart', initYMScriptOnEvent)
	}, INIT_DELAY)
}
