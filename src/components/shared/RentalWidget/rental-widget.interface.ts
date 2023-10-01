import { Lounge_Acfloungefields } from '@/shared/types/grahpql.types';

export interface IRentalWidget {
	isBlockHidden: Lounge_Acfloungefields['isiframehidden']; 
	iframeSrc: Lounge_Acfloungefields['iframesrc'];
	iframeClass: Lounge_Acfloungefields['iframeclass'];
	iframeStyles: Lounge_Acfloungefields['iframestyles'];
}

export interface IRentalWidgetIframeStyles {
	background?: string;
	border?: string;
	width?: string;
	height?: number;
}
