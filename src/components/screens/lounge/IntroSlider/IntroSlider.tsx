'use client';

import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { ILoungeIntroSlider } from '@/components/screens/lounge/lounge.interface';
import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer';
import SliderArrow from '@/components/ui/SliderArrows/SliderArrow';

import styles from './IntroSlider.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const INIT_SLIDES_PER_VIEW: number = 3;

const IntroSlider: FC<ILoungeIntroSlider> = ({ isBlockHidden, introSlider }) => {
	if (!introSlider?.length || isBlockHidden) return;

	const sliderRef = useRef<SwiperType | null>(null);
	const [slidesPerView, setSlidesPerView] =
		useState<number>(INIT_SLIDES_PER_VIEW);

	const isControlsVisible: boolean = introSlider?.length > slidesPerView;

	return (
		<WithAnimation>
			<div className={styles.root}>
				<div className={styles.outer}>
					<FancyboxContainer>
						<Swiper
							className={styles.slider}
							onBeforeInit={(swiper) => (sliderRef.current = swiper)}
							onBreakpoint={(swiper) =>
								setSlidesPerView(Number(swiper.params.slidesPerView))
							}
							autoplay={{
								delay: 3000,
								pauseOnMouseEnter: true
							}}
							slidesPerView={INIT_SLIDES_PER_VIEW}
							speed={600}
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
							{introSlider?.map((slide) => (
								<SwiperSlide key={slide?.sourceUrl} className={styles.slide}>
									<a
										href={slide?.sourceUrl || ''}
										data-fancybox="introSlider"
										className={styles.link}
									>
										<Image
											src={slide?.sourceUrl || ''}
											fill
											sizes="(max-width: 48em) 100vw, (max-width: 80em) 50vw, calc(100vw / 3)"
											alt={slide?.altText || ''}
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
				{
					isControlsVisible && <div className={styles.pagination}></div>
				}
			</div>
		</WithAnimation>
	);
};

export default IntroSlider;