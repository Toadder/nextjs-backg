import { FC } from 'react';

import styles from './Equipment.module.scss';
import EquipmentItem from './EquipmentItem'

const Equipment: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<EquipmentItem />
				<EquipmentItem />
				<EquipmentItem />
				<EquipmentItem />
			</div>
		</div>
	)
}

export default Equipment