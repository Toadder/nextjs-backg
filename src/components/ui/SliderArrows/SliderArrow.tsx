import cn from 'clsx'
import { FC } from 'react'

import FontAwesomeIcon from '../Icons/FontAwesomeIcon'

import styles from './SliderArrow.module.scss'
import { ISliderArrow } from './slider-arrow.interface'

const SliderArrow: FC<ISliderArrow> = ({ type, sliderRef, className = '' }) => {
	const handleClick = () => {
		type === 'next'
			? sliderRef.current?.slideNext()
			: sliderRef.current?.slidePrev()
	}

	return (
		<div
			onClick={handleClick}
			className={cn(styles.arrow, className, {
				[styles.next]: type === 'next'
			})}
		>
			<FontAwesomeIcon name="FaChevronLeft" />
		</div>
	)
}

export default SliderArrow
