export const handleScrollBarPadding = (
	offset: number,
	...items: HTMLElement[]
): void => {
	items.forEach(item => {
		item.style.paddingRight = `${offset}px`;
	});
};