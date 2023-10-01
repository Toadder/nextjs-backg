import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';

import { pagesUri } from '@/constants/pages';

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
				isbenefitshidden
			}
		}
	}
	${imageFragment}
`;
