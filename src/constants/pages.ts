interface IPagesUri {
	home: string;
	journal: string;
	equipment: string;
	contacts: string;
	conditions: string;
	dressings: string;
	lounges: string;
	pavilions: string;
}

export const pagesUri: IPagesUri = {
	home: '/',
	journal: '/journal',
	equipment: '/equipment',
	contacts: '/contacts',
	conditions: '/conditions',
	dressings: '/dressings',
	lounges: '/lounges',
	pavilions: '/pavilions'
};

export const pagesToRevalidate: string[] = [pagesUri.home, pagesUri.equipment, pagesUri.contacts, pagesUri.conditions];
