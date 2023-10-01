export const scrollToBlock = (
	selector: string
): void => {
	const targetElement = document.querySelector(selector);
	const header = document.querySelector('header');
	const scrollOffset: number = header?.clientHeight || 0;

	if (targetElement) {
		const offsetTop: number =
			targetElement.getBoundingClientRect().top - scrollOffset;

		window.scrollBy({
			top: offsetTop,
			behavior: 'smooth'
		});
	}
};
