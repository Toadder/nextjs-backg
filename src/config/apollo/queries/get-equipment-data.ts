import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

export const GET_EQUIPMENT_DATA = gql`
	query GET_EQUIPMENT_DATA {
		allEquipment {
			edges {
				node {
					id
					title
					acfEquipmentFields {
						content
						label
						image {
							...ImageFragment
						}
						contentalignhorizontal
						contentalignvertical
					}
				}
			}
		}
	}
	${imageFragment}
`
