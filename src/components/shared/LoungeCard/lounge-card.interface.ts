export interface ILounge {
	image: string;
	title: string;
	excerpt: string;
	link: string;
	label?: string;
}

export interface ILoungeCard extends ILounge {
	imageSizes: string;
}
