'use client';

import Image from 'next/image';
import { FC, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer';
import SliderArrow from '@/components/ui/SliderArrows/SliderArrow';

import styles from './IntroSlider.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

// FIXME: key={index} -> key={img}
const IntroSlider: FC = () => {
	const sliderRef = useRef<SwiperType | null>(null);

	return (
		<WithAnimation>
			<div className={styles.root}>
				<div className={styles.outer}>
					<FancyboxContainer>
						<Swiper
							className={styles.slider}
							onBeforeInit={(swiper) => {
								sliderRef.current = swiper;
							}}
							autoplay={{
								delay: 3000,
								pauseOnMouseEnter: true
							}}
							slidesPerView={3}
							speed={600}
							loop={true}
							pagination={{
								el: `.${styles.pagination}`,
								clickable: true
							}}
							modules={[Pagination, Autoplay]}
							breakpoints={{
								280: {
									slidesPerView: 1
								},
								768: {
									slidesPerView: 2
								},
								1280: {
									slidesPerView: 3
								}
							}}
						>
							{Array(9)
								.fill('')
								.map((_, index) => (
									<SwiperSlide key={index} className={styles.slide}>
										<a
											href="/static/lounge/main.jpg"
											data-fancybox="introSlider"
											data-caption="Текст к картинке"
											className={styles.link}
										>
											<Image
												src="/static/lounge/main.jpg"
												fill
												sizes="(max-width: 48em) 100vw, (max-width: 80em) 50vw, calc(100vw / 3)"
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
					<div className={styles.pagination}></div>
				</div>
			</div>
		</WithAnimation>
	);
};

export default IntroSlider;
