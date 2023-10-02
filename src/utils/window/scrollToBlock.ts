export const scrollToBlock = (
	id: string
): void => {
	if(!id?.length) return;

	const targetElement = document.querySelector(`#${id}`);
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
