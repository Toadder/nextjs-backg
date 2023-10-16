import { Lounge_Acfloungefields as LoungeAcfSettings } from '@/shared/types/grahpql.types'

export interface IRentalWidget {
	isBlockHidden: LoungeAcfSettings['isiframehidden']
	iframeSrc: LoungeAcfSettings['iframesrc']
	iframeClass: LoungeAcfSettings['iframeclass']
	iframeStyles: LoungeAcfSettings['iframestyles']
}

export interface IRentalWidgetIframeStyles {
	background?: string
	border?: string
	width?: string
	height?: number
}
