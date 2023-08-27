import Image from 'next/image';
import { FC } from 'react';

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer';

import styles from './MainMedia.module.scss';
import MainSlider from './MainSlider'

const MainMedia: FC = () => {
	return (
		<div className={styles.root}>
			<MainSlider />
			<FancyboxContainer className={styles.media}>
				<a href="/static/pavilion/plan.webp" data-fancybox="mainMediaPlan">
					<Image
						src="/static/pavilion/plan.webp"
						width={530}
						sizes='(max-width: 33.125em) 100vw, 33.125rem'
						height={0}
						alt=""
					/>
				</a>
			</FancyboxContainer>
		</div>
	);
};

export default MainMedia;
