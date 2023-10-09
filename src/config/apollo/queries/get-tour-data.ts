import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';

export const GET_TOUR_DATA = gql`
	query GET_TOUR_DATA {
		fields: generalSettings {
			acfSettings {
				istourhidden
				tourtitle
				tourimage {
					...ImageFragment
				}
			}
		}
	}
	${imageFragment}
`;
