import { FC, use } from 'react';

import client from '@/config/apollo/client';
import { GET_EQUIPMENT_DATA } from '@/config/apollo/queries/get-equipment-data';

import styles from './Equipment.module.scss';
import EquipmentItem from './EquipmentItem';
import { IEquipmentData } from './equipment.interface';

const getData = async () => {
	const { error, data } = await client.query({ query: GET_EQUIPMENT_DATA });
	const equipmentData: IEquipmentData = data?.allEquipment?.edges;
	return { error, equipmentData };
};

const Equipment: FC = () => {
	const { error, equipmentData } = use(getData());

	if (error) {
		console.error(error);
		return;
	}

	if (!equipmentData?.length) return;

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
	);
};

export default Equipment;
