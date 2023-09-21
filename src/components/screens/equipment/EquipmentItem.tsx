import { FC } from 'react';

import EquipmentCard from '@/components/shared/EquipmentCard/EquipmentCard';

import { IEquipment } from './equipment.interface';
import { WithAnimation } from '@/hoc/WithAnimation';

const EquipmentItem: FC<IEquipment> = (props) => {
	if (!props?.title?.length || !props?.image) return;

	return (
		<WithAnimation>
			<EquipmentCard
				{...props}
				imageSizes="(max-width: 48em) 100vw, calc(75rem / 2)"
			/>
		</WithAnimation>
	);
};

export default EquipmentItem;
