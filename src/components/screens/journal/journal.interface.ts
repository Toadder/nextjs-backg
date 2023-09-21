import { Journal, Journal_Acfjournaldata } from '@/shared/types/grahpql.types';

interface IJournalNode {
	node: Journal;
}

export interface IJournalData extends Array<IJournalNode> {}

export interface IJournal {
	items: IJournalData;
	hasNextPage: boolean;
	endCursor: string | null;
}

export interface IJournalItem extends Pick<Journal, 'title'> {
	image: Journal_Acfjournaldata['previewimage'];
	excerpt: Journal_Acfjournaldata['previewcontent'];
	link: Journal['uri'];
}
