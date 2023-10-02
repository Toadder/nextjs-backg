'use client';

import Image from 'next/image';
import { FC, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import Heading from '@/components/ui/Heading/Heading';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import SliderArrow from '@/components/ui/SliderArrows/SliderArrow';

import { MONTHS } from '../../article.constants';
import { IArticleMainSlider } from '../../article.interface';

import styles from './MainSlider.module.scss';

const MainSlider: FC<IArticleMainSlider> = ({ title, date, slider }) => {
	if (!slider?.length) return;

	const sliderRef = useRef<SwiperType | null>(null);

	const articleDate: Date = new Date(date || '1970/01/01');
	const formattedDate: string = `${articleDate.getDate()} ${
		MONTHS[articleDate.getMonth()]
	} ${articleDate.getFullYear()}`;

	return (
		<div className={styles.root}>
			<div className={styles.outer}>
				<Heading type="h1" className={styles.title}>
					{title}
				</Heading>
				<div className={styles.date}>
					<FontAwesomeIcon name="FaCalendar" />
					<span>{formattedDate}</span>
				</div>

				<Swiper
					className={styles.slider}
					onBeforeInit={(swiper) => (sliderRef.current = swiper)}
					autoplay={{
						delay: 3000,
						pauseOnMouseEnter: true
					}}
					loop={true}
					effect="fade"
					slidesPerView={1}
					speed={600}
					modules={[Autoplay, EffectFade]}
				>
					{slider?.map((slide, index) => (
						<SwiperSlide key={slide?.sourceUrl} className={styles.slide}>
							<Image
								src={slide?.sourceUrl || ''}
								fill
								sizes="(max-width: 80em) 100vw, 73.25rem"
								alt={slide?.altText || ''}
								className={styles.image}
								priority={index === 0}
							/>
						</SwiperSlide>
					))}
				</Swiper>

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
		</div>
	);
};

export default MainSlider;
