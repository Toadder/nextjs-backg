interface IPagesUri {
	home: string
	journal: string
	equipment: string
	contacts: string
	partners: string
	conditions: string
	dressings: string
	lounges: string
	pavilions: string
}

export const pagesUri: IPagesUri = {
	home: '/',
	lounges: '/lounges',
	pavilions: '/pavilions',
	journal: '/journal',
	equipment: '/equipment',
	partners: '/partners',
	contacts: '/contacts',
	conditions: '/conditions',
	dressings: '/dressings'
}

export const pagesToRevalidate: string[] = [
	pagesUri.home,
	pagesUri.lounges,
	pagesUri.pavilions,
	pagesUri.journal,
	pagesUri.equipment,
	pagesUri.partners,
	pagesUri.contacts,
	pagesUri.dressings,
	pagesUri.conditions
]
