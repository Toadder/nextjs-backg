'use client';

import Image from 'next/image';
import { FC, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import cn from 'clsx';

import SliderArrow from '@/components/ui/SliderArrows/SliderArrow';

import styles from './BenefitSlider.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

// FIXME: key={index} пофиксить
const BenefitSlider: FC = () => {
	const sliderRef = useRef<SwiperType | null>(null);

	return (
		<WithAnimation>
			<div className={styles.root}>
				<div className={styles.outer}>
					<Swiper
						className={styles.slider}
						onBeforeInit={(swiper) => {
							sliderRef.current = swiper;
						}}
						slidesPerView={1}
						speed={600}
						loop={true}
						pagination={{
							el: `.${styles.pagination}`,
							clickable: true
						}}
						autoplay={{
							delay: 3000,
							pauseOnMouseEnter: true
						}}
						modules={[Pagination, Autoplay]}
					>
						{Array(9)
							.fill('')
							.map((_, index) => (
								<SwiperSlide key={index} className={styles.slide}>
									{({ isActive }) => (
										<>
											<Image
												src="/static/pavilion/benefit_slide.jpg"
												fill
												sizes="100vw"
												alt=""
												className={styles.image}
											/>
											<div className={cn(styles.content, {
												[styles.active]: isActive
											})}>
												<div className={styles.title}>
													Вместимость до 100 человек
												</div>
												<p className={styles.text}>
													Павильон одновременно может вмещать до 100 человек и
													никому не будет душно
												</p>
											</div>
										</>
									)}
								</SwiperSlide>
							))}
					</Swiper>

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
				</div>
			</div>
		</WithAnimation>
	);
};

export default BenefitSlider;
