import Image from 'next/image';
import { FC } from 'react';

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer';

import { IPavilionMainMedia } from '../../pavilion.interface';

import styles from './MainMedia.module.scss';
import MainSlider from './MainSlider';

const MainMedia: FC<IPavilionMainMedia> = ({ slider, layout }) => {
	return (
		<div className={styles.root}>
			<MainSlider slider={slider} />
			{layout?.sourceUrl?.length ? (
				<FancyboxContainer className={styles.media}>
					<a href={layout?.sourceUrl} data-fancybox="mainMediaPlan">
						<Image
							src={layout?.sourceUrl}
							width={530}
							sizes="(max-width: 33.125em) 100vw, 33.125rem"
							height={0}
							alt={layout?.altText || ''}
						/>
					</a>
				</FancyboxContainer>
			) : null}
		</div>
	);
};

export default MainMedia;
