import { gql } from '@apollo/client'

import { pagesUri } from '@/constants/pages'

export const GET_CONTACTS_DATA = gql`
	query GET_CONTACTS_DATA {
		fields: page(id: "${pagesUri.contacts}", idType: URI) {
			acfContactsFields {
				issocialhidden
				socialtitle
				iscommunityhidden
				communitytitle
			}
		}
		socials: generalSettings {
			acfSettings {
				phone
				email
				address
				addresslink
				youtube
				vkgroup
				tgchannel
				instagramchannel
			}
		}
	}
`;
