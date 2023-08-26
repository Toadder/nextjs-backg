export const scrollToBlock = (
	selector: string,
	isMobile: boolean | null
): void => {
	const targetElement = document.querySelector(selector);
	const header = document.querySelector('header');
	const scrollOffset: number = isMobile && header ? header?.clientHeight : 0;

	if (targetElement) {
		const offsetTop: number =
			targetElement.getBoundingClientRect().top - scrollOffset;

		window.scrollBy({
			top: offsetTop,
			behavior: 'smooth'
		});
	}
};
