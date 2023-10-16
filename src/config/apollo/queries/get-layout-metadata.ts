import { gql } from '@apollo/client'

export const GET_LAYOUT_METADATA = gql`
	query GET_LAYOUT_METADATA {
		allSettings {
			generalSettingsTitle
		}
		favicon {
			mediaDetails {
				sizes {
					width
					sourceUrl
				}
			}
		}
	}
`
