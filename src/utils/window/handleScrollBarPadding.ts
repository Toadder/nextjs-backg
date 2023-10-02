import { APP_EVENT_WIDGET_CLASSNAME } from '@/constants/appEvent';

export const handleScrollBarPadding = (
	offset: number,
	...items: HTMLElement[]
): void => {
	items.forEach((item) => {
		const styleName: keyof CSSStyleDeclaration = item.classList.contains(
			`${APP_EVENT_WIDGET_CLASSNAME}`
		)
			? 'marginRight'
			: 'paddingRight';

		item.style[styleName] = offset ? `${offset}px` : '';
	});
};
