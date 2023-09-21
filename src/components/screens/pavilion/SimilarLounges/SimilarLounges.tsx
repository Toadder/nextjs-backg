import { FC } from 'react';

import ObjectCard from '@/components/shared/ObjectCard/ObjectCard';
import Heading from '@/components/ui/Heading/Heading';

import { parseToObjectType } from '@/utils/data/parseToObjectType';

import { IPavilionSimilarLounges } from '../pavilion.interface';

import styles from './SimilarLounges.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const SimilarLounges: FC<IPavilionSimilarLounges> = ({
	title,
	similarLounges
}) => {
	if (!similarLounges?.length) return;

	return (
		<WithAnimation>
			<section className={styles.root}>
				<div className={styles.inner}>
					{title?.length ? (
						<Heading className={styles.title}>{title}</Heading>
					) : null}

					<div className={styles.items}>
						{similarLounges?.map((element) => {
							if (!element) return;
							const object = parseToObjectType(element);
							return (
								<ObjectCard
									key={object?.id}
									imageSizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, calc(75rem / 2)"
									image={object?.image}
									title={object?.title}
									excerpt={object?.excerpt}
									link={object?.link}
									label={object?.label}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</WithAnimation>
	);
};

export default SimilarLounges;
