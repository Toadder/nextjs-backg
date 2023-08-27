'use client';

import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import { Autoplay, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer';
import SliderArrow from '@/components/ui/SliderArrows/SliderArrow';

import styles from './MainMedia.module.scss';

// FIXME: key={index}
const MainSlider: FC = () => {
	const sliderRef = useRef<SwiperType | null>(null);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className={styles.sliders}>
			<div className={styles.outer}>
				<FancyboxContainer>
					<Swiper
						className={styles.slider}
						onBeforeInit={(swiper) => {
							sliderRef.current = swiper;
						}}
						thumbs={{ swiper: thumbsSwiper }}
						autoplay={{
							delay: 3000,
							pauseOnMouseEnter: true
						}}
						slidesPerView={1}
						speed={600}
						loop={true}
						modules={[Autoplay, Thumbs]}
					>
						{Array(9)
							.fill('')
							.map((_, index) => (
								<SwiperSlide key={index} className={styles.slide}>
									<a
										href="/static/pavilion/main_slide.jpg"
										data-fancybox="mainSlider"
										data-caption="Текст к картинке"
										className={styles.link}
									>
										<Image
											src="/static/pavilion/main_slide.jpg"
											fill
											sizes="(max-width: 64em) 100vw, 33.125rem"
											alt=""
											className={styles.image}
										/>
									</a>
								</SwiperSlide>
							))}
					</Swiper>
				</FancyboxContainer>
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
			</div>
			<Swiper
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
				{Array(9)
					.fill('')
					.map((_, index) => (
						<SwiperSlide key={index} className={styles.thumb}>
							<Image
								src="/static/pavilion/main_slide.jpg"
								fill
								sizes="(max-width: 48em) calc(100vw / 3), (max-width: 64em) 25vw, calc(33.125rem / 5)"
								alt=""
								className={styles.image}
							/>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default MainSlider;
