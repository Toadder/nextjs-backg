import cn from 'clsx';
import { FC, MutableRefObject } from 'react';
import { Swiper as SwiperType } from 'swiper/types';

import FontAwesomeIcon from '../Icons/FontAwesomeIcon';

import styles from './SliderArrow.module.scss';

type DirectionType = 'prev' | 'next';

interface ISliderArrow {
	type: DirectionType;
	sliderRef: MutableRefObject<SwiperType | null>;
	className?: string;
}
0;

const SliderArrow: FC<ISliderArrow> = ({ type, sliderRef, className = '' }) => {
	const handleClick = () => {
		type === 'next'
			? sliderRef.current?.slideNext()
			: sliderRef.current?.slidePrev();
	};

	return (
		<div
			onClick={handleClick}
			className={cn(styles.arrow, className, {
				[styles.next]: type === 'next'
			})}
		>
			<FontAwesomeIcon name="FaChevronLeft" />
		</div>
	);
};

export default SliderArrow;
