import client from '@/config/apollo/client'
import { GET_EQUIPMENT_DATA } from '@/config/apollo/queries/get-equipment-data'

import { IEquipmentData } from './equipment.interface'

class EquipmentService {
	async getData() {
		const { error, data } = await client.query({ query: GET_EQUIPMENT_DATA })
		const equipmentData: IEquipmentData = data?.allEquipment?.edges
		return { error, equipmentData }
	}
}

export default new EquipmentService()
