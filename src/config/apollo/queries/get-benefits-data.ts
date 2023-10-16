import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

export const GET_BENEFITS_DATA = gql`
	query GET_BENEFITS_DATA {
		fields: generalSettings {
			acfSettings {
				isbenefitshidden
				benefits {
					content
					excerpt
					title
					icon {
						...ImageFragment
					}
				}
			}
		}
	}
	${imageFragment}
`
