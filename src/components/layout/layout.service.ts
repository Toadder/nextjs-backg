import { IFooterData } from '@/components/layout/Footer/footer.interface'
import { IHeaderData } from '@/components/layout/Header/header.interface'
import { IPopupsData } from '@/components/layout/Popups/popups.interface'

import '@/assets/styles/globals.scss'

import client from '@/config/apollo/client'
import { GET_LAYOUT_DATA } from '@/config/apollo/queries/get-layout-data'

import { ILayoutGetDataResponse } from './layout.interface'

class LayoutService {
	async getData(): Promise<ILayoutGetDataResponse> {
		const { error, data } = await client.query({ query: GET_LAYOUT_DATA })

		const loungeWidget: string =
			data?.generalSettings?.acfSettings?.loungewidget || ''

		const headerData: IHeaderData = {
			menu: data?.menu?.edges,
			fields: data?.headerFields?.acfSettings
		}

		const footerData: IFooterData = data?.footerFields?.acfSettings

		const popupsData: IPopupsData = data?.popupFields?.acfSettings

		return {
			error,
			headerData,
			footerData,
			popupsData,
			loungeWidget
		}
	}
}

export default new LayoutService()