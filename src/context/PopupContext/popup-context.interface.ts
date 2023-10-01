export type TActivePopup = '' | 'messenger';

export interface IPopupContext {
	activePopup: TActivePopup;
	setActivePopup: (popupName: TActivePopup) => void;
}