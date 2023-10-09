import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';

import { pagesUri } from '@/constants/pages';

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
`;
