import { gql } from '@apollo/client'

export const GET_BOOKING_DATA = gql`
	query GET_BOOKING_DATA {
		fields: generalSettings {
			acfSettings {
				isbookinghidden
				bookingtitle
				bookingfile {
					mediaItemUrl
				}
				bookingcontent
			}
		}
	}
`
