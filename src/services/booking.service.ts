import {
	IBookingData,
	IBookingGetDataResponse
} from '@/components/shared/Booking/booking.interface'

import client from '@/config/apollo/client'
import { GET_BOOKING_DATA } from '@/config/apollo/queries/get-booking-data'

class BookingService {
	async getData(): Promise<IBookingGetDataResponse> {
		const { error, data } = await client.query({ query: GET_BOOKING_DATA })
		const bookingData: IBookingData = data?.fields?.acfSettings
		return { error, bookingData }
	}
}

export default new BookingService()
