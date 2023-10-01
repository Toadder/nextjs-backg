import { FC } from 'react';

import EquipmentCard from '@/components/shared/EquipmentCard/EquipmentCard';
import Heading from '@/components/ui/Heading/Heading';

import { IPavilionEquipment } from '../pavilion.interface';

import styles from './AvailableEquipment.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const AvailableEquipment: FC<IPavilionEquipment> = ({
	isBlockHidden,
	title,
	equipmentItems
}) => {
	if (!equipmentItems?.length || isBlockHidden) return;

	return (
		<WithAnimation>
			<section className={styles.root}>
				{title?.length ? (
					<div className={styles.inner}>
						<Heading className={styles.title}>{title}</Heading>
					</div>
				) : null}

				<div className={styles.items}>
					{equipmentItems?.map((item) => (
						<EquipmentCard
							key={item?.id}
							image={item?.acfEquipmentFields?.image}
							title={item?.title}
							content={item?.acfEquipmentFields?.content}
							contentAlignHorizontal={
								item?.acfEquipmentFields?.contentalignhorizontal
							}
							contentAlignVertical={
								item?.acfEquipmentFields?.contentalignvertical
							}
							label={item?.acfEquipmentFields?.label}
							imageSizes="(max-width: 48em) 100vw, (max-width: 80em) 50vw, calc(100vw / 3)"
						/>
					))}
				</div>
			</section>
		</WithAnimation>
	);
};

export default AvailableEquipment;
