import { IEquipment } from '@/components/screens/equipment/equipment.interface';

export interface IAlignVariants {
	verticalTop: string;
	verticalCenter: string;
	verticalBottom: string;

	horizontalLeft: string;
	horizontalCenter: string;
	horizontalRight: string;

	[key: string]: string;
}

export interface IEquipmentCard extends IEquipment {
	imageSizes: string;
}
