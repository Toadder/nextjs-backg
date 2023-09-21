import { gql } from '@apollo/client'

import { pagesUri } from '@/constants/pages'

export const GET_CONTACTS_DATA = gql`
	query GET_CONTACTS_DATA {
		fields: page(id: "${pagesUri.contacts}", idType: URI) {
			acfContactsFields {
				socialtitle
				communitytitle
			}
		}
		socials: generalSettings {
			acfSettings {
				phone
				email
				address
				addresslink
				telegram
				whatsapp
				vkgroup
				tgchannel
				instagramchannel
			}
		}
	}
`;
