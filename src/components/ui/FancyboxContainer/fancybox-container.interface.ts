import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { ComponentOptionsType as FancyboxOptionsType } from '@fancyapps/ui/types/Fancybox/options'
import { MutableRefObject, ReactNode } from 'react'
import { Swiper as SwiperType } from 'swiper/types'

export interface IFancyboxContainer {
	children: ReactNode
	className?: string
	delegate?: string
	options?: Partial<FancyboxOptionsType>
	swiperRef?: MutableRefObject<SwiperType | null>
}
