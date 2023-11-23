import { FC, use } from 'react'

import equipmentService from '@/services/equipment.service'

import styles from './Equipment.module.scss'
import EquipmentItem from './EquipmentItem'

const Equipment: FC = () => {
	const { error, equipmentData } = use(equipmentService.getData())

	if (error) {
		console.error(error)
		return
	}

	if (!equipmentData?.length) return

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				{equipmentData?.map(({ node }, index) => (
					<EquipmentItem
						index={index}
						key={node?.id}
						title={node?.title}
						content={node?.acfEquipmentFields?.content}
						image={node?.acfEquipmentFields?.image}
						contentAlignHorizontal={
							node?.acfEquipmentFields?.contentalignhorizontal
						}
						contentAlignVertical={
							node?.acfEquipmentFields?.contentalignvertical
						}
						label={node?.acfEquipmentFields?.label}
					/>
				))}
			</div>
		</div>
	)
}

export default Equipment
