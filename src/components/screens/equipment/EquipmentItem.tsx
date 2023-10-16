import { FC } from 'react'

import EquipmentCard from '@/components/shared/EquipmentCard/EquipmentCard'

import { IEquipment } from './equipment.interface'

const EquipmentItem: FC<IEquipment> = ({ index, ...props }) => {
	if (!props?.title?.length || !props?.image) return

	return (
		<EquipmentCard
			{...props}
			imageSizes="(max-width: 48em) 100vw, calc(75rem / 2)"
			isImagePreloaded={index < 4}
		/>
	)
}

export default EquipmentItem
