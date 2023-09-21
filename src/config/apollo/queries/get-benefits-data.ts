import { gql } from '@apollo/client';

import { pagesUri } from '@/constants/pages';
import { imageFragment } from '../fraqments/image'

export const GET_BENEFITS_DATA = gql`
	query GET_BENEFITS_DATA {
		fields: page(id: "${pagesUri.home}", idType: URI) {
			acfHomeFields {
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
`;
