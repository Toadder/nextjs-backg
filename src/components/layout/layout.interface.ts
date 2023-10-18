import { ApolloError } from '@apollo/client'
import { IHeaderData } from './Header/header.interface'
import { IFooterData } from './Footer/footer.interface'
import { IPopupsData } from './Popups/popups.interface'

export interface ILayoutGetDataResponse {
	error: ApolloError | undefined
	headerData: IHeaderData
	footerData: IFooterData
	popupsData: IPopupsData
	paymentLink: string
}