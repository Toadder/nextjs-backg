import {
	GeneralSettings_Acfsettings,
	MenuItem
} from '@/shared/types/grahpql.types';

export interface IMenuNodes {
	node: MenuItem;
}

export interface IPropsWithMenu {
	menu: IMenuNodes[];
}

export interface IHeaderData extends IPropsWithMenu {
	fields: Pick<GeneralSettings_Acfsettings, 'logo' | 'phone'>;
}

export interface IHeaderLogo extends Pick<GeneralSettings_Acfsettings, 'logo'> {
	hideMenu: () => void;
}

export interface IHeaderMenu extends IPropsWithMenu {
	isOpened: boolean;
	hideMenu: () => void;
}

export interface IHeaderItem
	extends Pick<MenuItem, 'label' | 'path' | 'childItems'> {}

export interface IHeaderItemContent extends IHeaderItem {
	onClickHandler: (itemsLength?: number) => void;
	isSubmenuShown?: boolean;
}

export interface IHeaderItemInteractive extends IHeaderItem {
	hideMenu: () => void;
}

export interface IHeaderSubmenu {
	childItems: IMenuNodes[];
	isMobileDevice: boolean | null;
	toggleEvent: Date | number;
	onClickHandler: (itemsLength?: number) => void;
}

export interface IHeaderPhone
	extends Pick<GeneralSettings_Acfsettings, 'phone'> {}

export interface IHeaderBurger {
	isOpened: boolean;
	toggleIsOpened: () => void;
}
