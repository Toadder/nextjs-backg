import { ApolloError } from '@apollo/client'

import {
	Equipment,
	Equipment_Acfequipmentfields as EquipmentAcfSettings
} from '@/shared/types/grahpql.types'

export interface IEquipmentGetDataResponse {
	error: ApolloError | undefined
	equipmentData: IEquipmentData
}

export interface IEquipmentData extends Array<{ node: Equipment }> {}

export interface IEquipment {
	index: number
	title: Equipment['title']
	content: EquipmentAcfSettings['content']
	label: EquipmentAcfSettings['label']
	image: EquipmentAcfSettings['image']
	contentAlignHorizontal: EquipmentAcfSettings['contentalignhorizontal']
	contentAlignVertical: EquipmentAcfSettings['contentalignvertical']
}
