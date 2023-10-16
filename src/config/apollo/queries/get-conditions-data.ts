import { gql } from '@apollo/client'

import { pagesUri } from '@/constants/pages'

export const GET_CONDITIONS_DATA = gql`
	query GET_CONDITIONS_DATA {
		generalSettings {
			acfSettings {
				bookingfile {
					mediaItemUrl
				}
			}
		}
		page(id: "${pagesUri.conditions}", idType: URI) {
			content
		}
	}
`
