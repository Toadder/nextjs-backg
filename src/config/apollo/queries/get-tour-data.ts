import { gql } from '@apollo/client';

export const GET_TOUR_DATA = gql`
	query GET_BENEFITS_DATA {
		fields: generalSettings {
			acfSettings {
				istourhidden
			}
		}
	}
`;