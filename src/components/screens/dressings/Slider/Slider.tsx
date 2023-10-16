'use client'

import Image from 'next/image'
import { FC, useRef } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer'
import SliderArrow from '@/components/ui/SliderArrows/SliderArrow'

import { IDressingsSlider } from '../dressings.interface'

import styles from './Slider.module.scss'

const Slider: FC<IDressingsSlider> = ({ id, slider, itemIndex }) => {
	if (!slider?.length) return

	const sliderRef = useRef<SwiperType | null>(null)

	return (
		<div className={styles.root}>
			<div className={styles.outer}>
				<FancyboxContainer className={styles.fancy} swiperRef={sliderRef}>
					<Swiper
						className={styles.slider}
						onBeforeInit={swiper => (sliderRef.current = swiper)}
						autoplay={{
							delay: 3000,
							pauseOnMouseEnter: true
						}}
						slidesPerView={1}
						speed={600}
						modules={[Autoplay]}
						loop={true}
					>
						{slider?.map((slide, slideIndex) => (
							<SwiperSlide key={slide?.sourceUrl} className={styles.slide}>
								<a
									href={slide?.sourceUrl || ''}
									data-fancybox={`dressingSlider${id}`}
									className={styles.link}
								>
									<Image
										src={slide?.sourceUrl || ''}
										fill
										sizes="(max-width: 64em) 100vw, 34.75rem"
										alt={slide?.altText || ''}
										className={styles.image}
										priority={itemIndex < 2 && slideIndex === 0}
									/>
								</a>
							</SwiperSlide>
						))}
					</Swiper>
				</FancyboxContainer>
				{slider?.length > 1 && (
					<>
						<SliderArrow
							className={styles.prev}
							sliderRef={sliderRef}
							type="prev"
						/>
						<SliderArrow
							className={styles.next}
							sliderRef={sliderRef}
							type="next"
						/>
						<div className={styles.pagination}></div>
					</>
				)}
			</div>
		</div>
	)
}

export default Slider
