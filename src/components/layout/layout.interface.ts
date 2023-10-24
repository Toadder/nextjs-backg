import { ApolloError } from '@apollo/client'

import { IFooterData } from './Footer/footer.interface'
import { IHeaderData } from './Header/header.interface'
import { IPopupsData } from './Popups/popups.interface'

export interface ILayoutGetDataResponse {
	error: ApolloError | undefined
	headerData: IHeaderData
	footerData: IFooterData
	popupsData: IPopupsData
	loungeWidget: string
}
