import { MutableRefObject } from 'react'
import { Swiper as SwiperType } from 'swiper/types'

type DirectionType = 'prev' | 'next'

export interface ISliderArrow {
	type: DirectionType
	sliderRef: MutableRefObject<SwiperType | null>
	className?: string
}
