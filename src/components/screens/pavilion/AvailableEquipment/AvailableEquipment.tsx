import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';

import styles from './AvailableEquipment.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';
import EquipmentCard from '@/components/shared/EquipmentCard/EquipmentCard'

const AvailableEquipment: FC = () => {
	return (
		<WithAnimation>
			<section className={styles.root}>
				<div className={styles.inner}>
					<Heading className={styles.title}>Оборудование</Heading>
				</div>
				<div className={styles.items}>
					<EquipmentCard imageSizes='(max-width: 48em) 100vw, (max-width: 80em) 50vw, calc(100vw / 3)' />
					<EquipmentCard imageSizes='(max-width: 48em) 100vw, (max-width: 80em) 50vw, calc(100vw / 3)' />
					<EquipmentCard imageSizes='(max-width: 48em) 100vw, (max-width: 80em) 50vw, calc(100vw / 3)' />
				</div>
			</section>
		</WithAnimation>
	);
};

export default AvailableEquipment;
