import { FC } from 'react'

import EquipmentCard from '@/components/shared/EquipmentCard/EquipmentCard'
import Heading from '@/components/ui/Heading/Heading'

import { IPavilionEquipment } from '../pavilion.interface'

import styles from './AvailableEquipment.module.scss'

const AvailableEquipment: FC<IPavilionEquipment> = ({
	isBlockHidden,
	title,
	equipmentItems
}) => {
	if (!equipmentItems?.length || isBlockHidden) return

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				{title?.length ? (
					<Heading className={styles.title}>{title}</Heading>
				) : null}
				<div className={styles.items}>
					{equipmentItems?.map(item => (
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
							imageSizes="(max-width: 48em) 100vw, 50vw"
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default AvailableEquipment
