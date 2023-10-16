import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

export const GET_DRESSINGS_DATA = gql`
	query GET_DRESSINGS_DATA {
		dressings {
			edges {
				node {
					id
					slug
					acfDressingFields {
						maintitle
						maincontent
						mainslider {
							...ImageFragment
						}
					}
				}
			}
		}
	}
	${imageFragment}
`
