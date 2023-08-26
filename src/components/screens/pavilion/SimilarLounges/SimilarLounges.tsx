import { FC } from 'react';

import LoungeCard from '@/components/shared/LoungeCard/LoungeCard';
import Heading from '@/components/ui/Heading/Heading';

import styles from './SimilarLounges.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const SimilarLounges: FC = () => {
	return (
		<WithAnimation>
			<section className={styles.root}>
				<div className={styles.inner}>
					<Heading className={styles.title}>Похожие залы</Heading>
					<div className={styles.items}>
						<LoungeCard
							imageSizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, calc(1200px / 2)"
							image="/static/home/lounges/pavilion-ciklorama.webp"
							title="Павильон циклорама"
							excerpt="Одна из самых больших циклорам в Москве. 18 метров ширины и 9 метров глубины..."
							link="/pavilions/cycle"
						/>
						<LoungeCard
							imageSizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, calc(1200px / 2)"
							image="/static/home/lounges/mini-cikla.webp"
							title="Мини цикла"
							excerpt="Мини циклорама - просторный зал с угловой циклорамой и просторной рабочей зоной..."
							link="/lounges/kuhnya"
						/>
					</div>
				</div>
			</section>
		</WithAnimation>
	);
};

export default SimilarLounges;
