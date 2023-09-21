import { gql } from '@apollo/client';

export const GET_BOOKING_DATA = gql`
	query GET_BOOKING_DATA {
		fields: generalSettings {
			acfSettings {
				bookingtitle
				bookingfile {
					mediaItemUrl
				}
				bookingcontent
			}
		}
	}
`;
