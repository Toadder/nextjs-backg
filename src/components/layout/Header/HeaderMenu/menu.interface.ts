export interface IHeaderItem {
	name: string;
	path: string;
	items?: IHeaderItem[];
}

export interface IHeaderBurger {
	isOpened: boolean;
	toggleIsOpened: () => void;
}

export interface IHeaderMenu {
	isOpened: boolean;
	hideMenu: () => void;
}

export interface IHeaderSubmenu {
	items: IHeaderItem[];
	isMobileDevice: boolean | null;
	toggleEvent: Date | number;
	onClickHandler: (itemsLength?: number) => void;
}

export interface IHeaderItemContent extends IHeaderItem {
	onClickHandler: (itemsLength?: number) => void;
	isSubmenuShown?: boolean;
}

export interface IHeaderItemInteractive extends IHeaderItem {
	hideMenu: () => void;
}
