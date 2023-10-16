'use client'

import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import { Autoplay, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer'
import SliderArrow from '@/components/ui/SliderArrows/SliderArrow'

import { IPavilionMainSlider } from '../../pavilion.interface'

import styles from './MainMedia.module.scss'

const MainSlider: FC<IPavilionMainSlider> = ({ slider }) => {
	if (!slider?.length) return

	const sliderRef = useRef<SwiperType | null>(null)
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
	const [isThumbsInit, setIsThumbsInit] = useState<boolean>(false)

	return (
		<div className={styles.sliders}>
			<div className={styles.outer}>
				<FancyboxContainer swiperRef={sliderRef}>
					<Swiper
						className={styles.slider}
						onBeforeInit={swiper => {
							sliderRef.current = swiper
						}}
						thumbs={{
							swiper:
								thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
						}}
						autoplay={{
							delay: 3000,
							pauseOnMouseEnter: true
						}}
						slidesPerView={1}
						speed={600}
						loop={true}
						modules={[Autoplay, Thumbs]}
					>
						{slider?.map(slide => (
							<SwiperSlide key={slide?.sourceUrl} className={styles.slide}>
								<a
									href={slide?.sourceUrl || ''}
									data-fancybox="mainSlider"
									className={styles.link}
								>
									<Image
										src={slide?.sourceUrl || ''}
										fill
										sizes="(max-width: 64em) 100vw, 33.125rem"
										alt={slide?.altText || ''}
										className={styles.image}
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
					</>
				)}
			</div>

			<Swiper
				style={{ opacity: Number(isThumbsInit) }}
				onAfterInit={() => setIsThumbsInit(true)}
				className={styles.thumbs}
				slidesPerView={5}
				spaceBetween={4}
				speed={600}
				modules={[Thumbs]}
				watchSlidesProgress
				onSwiper={setThumbsSwiper as any}
				breakpoints={{
					280: {
						slidesPerView: 3
					},
					768: {
						slidesPerView: 4
					},
					1024: {
						slidesPerView: 5
					}
				}}
			>
				{slider?.map(slide => (
					<SwiperSlide key={slide?.sourceUrl} className={styles.thumb}>
						<Image
							src={slide?.sourceUrl || ''}
							fill
							sizes="(max-width: 48em) calc(100vw / 3), (max-width: 64em) 25vw, calc(33.125rem / 5)"
							alt={slide?.altText || ''}
							className={styles.image}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default MainSlider
