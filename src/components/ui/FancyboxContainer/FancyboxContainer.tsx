'use client';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { ComponentOptionsType as FancyboxOptionsType } from '@fancyapps/ui/types/Fancybox/options';
import { FC, MutableRefObject, ReactNode, useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper/types';

interface IFancyboxContainer {
	children: ReactNode;
	className?: string;
	delegate?: string;
	options?: Partial<FancyboxOptionsType>;
	swiperRef?: MutableRefObject<SwiperType | null>;
}

const FancyboxContainer: FC<IFancyboxContainer> = ({
	children,
	className,
	delegate,
	options,
	swiperRef
}) => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;

		const _delegate = delegate || '[data-fancybox]';
		const _options = options || {};

		NativeFancybox.bind(container, _delegate, {
			..._options,
			...(swiperRef?.current
				? {
						on: {
							'Carousel.ready': () => swiperRef.current?.autoplay?.stop(),
							'Carousel.change': (fancy) => {
								const slideIndex: number = fancy.getSlide().index;
								swiperRef.current?.slideTo(slideIndex);
							}
						}
				  }
				: {})
		});

		return () => {
			NativeFancybox.unbind(container);
			NativeFancybox.close();
		};
	}, []);

	return (
		<div className={className} ref={containerRef}>
			{children}
		</div>
	);
};

export default FancyboxContainer;
