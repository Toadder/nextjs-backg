import {
	GeneralSettings_Acfsettings as AcfSettings,
	MenuItem
} from '@/shared/types/grahpql.types'

interface IPropsWithMenu {
	menu: IMenuNode[]
}

interface IMenuNode {
	node: MenuItem
}

interface IHeaderItemFields {
	label: MenuItem['label']
	path: MenuItem['path']
	childItems: MenuItem['childItems']
}

export interface IHeaderData extends IPropsWithMenu {
	fields: Pick<AcfSettings, 'logo' | 'phone'>
}

export interface IHeaderLogo {
	logo: AcfSettings['logo']
	hideMenu: () => void
}

export interface IHeaderMenu extends IPropsWithMenu {
	isOpened: boolean
	hideMenu: () => void
}

export interface IHeaderItem extends IHeaderItemFields {
	hideMenu: () => void
}

export interface IHeaderItemInner extends IHeaderItemFields {
	isSubmenuShown?: boolean
	onClickHandler: (isTrigger?: boolean) => void
}

export interface IHeaderSubmenu extends IPropsWithMenu {
	isMobileDevice: boolean | null
	toggleEvent: Date | number
	onClickHandler: (isTrigger?: boolean) => void
}

export interface IHeaderPhone {
	phone: AcfSettings['phone']
}

export interface IHeaderBurger {
	isOpened: boolean
	toggleIsOpened: () => void
}
