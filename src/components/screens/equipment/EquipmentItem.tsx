import { FC } from 'react';

import EquipmentCard from '@/components/shared/EquipmentCard/EquipmentCard';

import { WithAnimation } from '@/hoc/WithAnimation';

const EquipmentItem: FC = () => {
	return (
		<WithAnimation>
			<EquipmentCard imageSizes="(max-width: 48em) 100vw, calc(75rem / 2)" />
		</WithAnimation>
	);
};

export default EquipmentItem;
