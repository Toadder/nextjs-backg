import Image from 'next/image';

import Label from '@/components/ui/Label/Label';

import styles from './EquipmentCard.module.scss';
import { FC } from 'react'
import { IEquipmentCard } from './equipment-card.interface'

const EquipmentCard: FC<IEquipmentCard> = ({ imageSizes }) => {
	return (
		<div className={styles.item}>
			<Image
				src="/static/equipment/main.webp"
				fill
				sizes={imageSizes}
				alt=""
				className={styles.image}
			/>
			<div className={styles.content}>
				<div className={styles.title}>GODOX VL300</div>
				<p className={styles.text}>
					Постоянный светодиодный источник света, аналог Aputure 300D <br />{' '}
					Стоимость: 1200 р/смена{' '}
				</p>
			</div>
			<Label text="RGBW" />
		</div>
	);
};

export default EquipmentCard;
