import {
	Equipment,
	Equipment_Acfequipmentfields
} from '@/shared/types/grahpql.types';

export interface IEquipmentData extends Array<{ node: Equipment }> {}

export interface IEquipment
	extends Pick<Equipment, 'title'>,
		Pick<Equipment_Acfequipmentfields, 'content' | 'label' | 'image'> {
	contentAlignHorizontal: Equipment_Acfequipmentfields['contentalignhorizontal'];
	contentAlignVertical: Equipment_Acfequipmentfields['contentalignvertical'];
	index: number;
}
