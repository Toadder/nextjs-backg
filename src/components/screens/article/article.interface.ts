import { IComment } from '@/shared/types/general.types';
import { Journal, Journal_Acfjournaldata, CommentConnectionPageInfo } from '@/shared/types/grahpql.types';

import { IJournalData } from '../journal/journal.interface';

export interface IArticleData
	extends Pick<
		Journal,
		'id' | 'databaseId' | 'title' | 'date' | 'content' | 'acfJournalData'
	> {
	comments: { 
		nodes: Array<IComment>; 
		pageInfo: CommentConnectionPageInfo 
	};
}

export interface IArticleMain
	extends Pick<Journal, 'title' | 'date' | 'content'> {
	slider: Journal_Acfjournaldata['mainslider'];
}

export interface IArticleMainSlider extends Pick<Journal, 'title' | 'date'> {
	slider: Journal_Acfjournaldata['mainslider'];
}

export interface IArticleMainContentt extends Pick<Journal, 'content'> {}

export interface IArticleComments {
	slug: string;
	postId: Journal['databaseId'];
	comments: Array<IComment>;
	hasNextPage: boolean;
	endCursor: string | null;
	
}

export interface IArticleCommentsForm {
	postId: Journal['databaseId'];
}

export interface IArticleCommentsItems {
	slug: string;
	comments: Array<IComment>;
	hasNextPage: boolean;
	endCursor: string | null;
}

export interface IArticleCommentsItem extends IComment {}

export interface IArticleItems {
	currentId: Journal['id'];
	articles: IJournalData;
}
