'use client'

import cn from 'clsx'
import Image from 'next/image'
import { FC, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import SliderArrow from '@/components/ui/SliderArrows/SliderArrow'

import { IPavilionBenefitSlider } from '../pavilion.interface'

import styles from './BenefitSlider.module.scss'

const BenefitSlider: FC<IPavilionBenefitSlider> = ({
	isBlockHidden,
	benefitSlider
}) => {
	if (!benefitSlider?.length || isBlockHidden) return

	const sliderRef = useRef<SwiperType | null>(null)
	const isControlsVisible: boolean = benefitSlider?.length > 1

	return (
		<div className={styles.root}>
			<div className={styles.outer}>
				<Swiper
					className={styles.slider}
					onBeforeInit={swiper => {
						sliderRef.current = swiper
					}}
					slidesPerView={1}
					speed={600}
					pagination={{
						el: `.${styles.pagination}`,
						clickable: true
					}}
					loop={true}
					autoplay={{
						delay: 3000,
						pauseOnMouseEnter: true
					}}
					modules={[Pagination, Autoplay]}
				>
					{benefitSlider?.map((slide, index) => (
						<SwiperSlide key={slide?.image?.sourceUrl} className={styles.slide}>
							{({ isActive }) => (
								<>
									<Image
										src={slide?.image?.sourceUrl || ''}
										fill
										sizes="100vw"
										alt={slide?.image?.altText || ''}
										className={styles.image}
										priority={index === 0}
									/>
									<div
										className={cn(styles.content, {
											[styles.active]: isActive
										})}
									>
										{slide?.title?.length ? (
											<div className={styles.title}>{slide?.title}</div>
										) : null}
										{slide?.content?.length ? (
											<p
												className={styles.text}
												dangerouslySetInnerHTML={{ __html: slide?.content }}
											/>
										) : null}
									</div>
								</>
							)}
						</SwiperSlide>
					))}
				</Swiper>

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

export default BenefitSlider
