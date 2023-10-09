export type TActivePopup = '' | 'messenger' | 'aboutPartner' | 'becomePartner' | 'greeting';

export interface IPopupContext {
	activePopup: TActivePopup;
	setActivePopup: (popupName: TActivePopup) => void;
}