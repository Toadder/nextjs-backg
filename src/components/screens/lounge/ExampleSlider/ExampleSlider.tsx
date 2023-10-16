'use client'

import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer'
import SliderArrow from '@/components/ui/SliderArrows/SliderArrow'

import { ILoungeExampleSlider } from '../lounge.interface'

import styles from './ExampleSlider.module.scss'
import { INITIAL_SLIDES_PER_VIEW } from './example-slider.constant'

const ExampleSlider: FC<ILoungeExampleSlider> = ({
	isBlockHidden,
	exampleSlider
}) => {
	if (!exampleSlider?.length || isBlockHidden) return

	const sliderRef = useRef<SwiperType | null>(null)
	const [isInit, setIsInit] = useState<boolean>(false)
	const [slidesPerView, setSlidesPerView] = useState<number>(
		INITIAL_SLIDES_PER_VIEW
	)

	const isControlsVisible: boolean = exampleSlider?.length > slidesPerView

	return (
		<div className={styles.root}>
			<div className={styles.outer}>
				<FancyboxContainer swiperRef={sliderRef}>
					<Swiper
						style={{ opacity: Number(isInit) }}
						className={styles.slider}
						onBeforeInit={swiper => {
							sliderRef.current = swiper
						}}
						onAfterInit={() => setIsInit(true)}
						onBreakpoint={swiper =>
							setSlidesPerView(Number(swiper.params.slidesPerView))
						}
						slidesPerView={INITIAL_SLIDES_PER_VIEW}
						speed={600}
						pagination={{
							el: `.${styles.pagination}`,
							clickable: true
						}}
						autoplay={{
							delay: 3000,
							pauseOnMouseEnter: true
						}}
						modules={[Pagination, Autoplay]}
						breakpoints={{
							280: {
								slidesPerView: 1
							},
							768: {
								slidesPerView: 2
							},
							1024: {
								slidesPerView: 3
							},
							1280: {
								slidesPerView: 4
							}
						}}
					>
						{exampleSlider?.map(slide => (
							<SwiperSlide
								key={slide?.image?.sourceUrl}
								className={styles.slide}
							>
								<a
									href={slide?.image?.sourceUrl || ''}
									data-fancybox="exampleSlider"
									data-caption={slide?.caption || null}
									className={styles.link}
								>
									<Image
										src={slide?.image?.sourceUrl || ''}
										fill
										sizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, (max-width: 80em) calc(100vw / 3), 25vw"
										alt={slide?.image?.altText || ''}
										className={styles.image}
									/>
								</a>
							</SwiperSlide>
						))}
					</Swiper>
				</FancyboxContainer>

				{isControlsVisible && (
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
			{isControlsVisible && <div className={styles.pagination}></div>}
		</div>
	)
}

export default ExampleSlider
