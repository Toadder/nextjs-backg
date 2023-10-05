export type TActivePopup = '' | 'messenger' | 'aboutPartner' | 'becomePartner';

export interface IPopupContext {
	activePopup: TActivePopup;
	setActivePopup: (popupName: TActivePopup) => void;
}