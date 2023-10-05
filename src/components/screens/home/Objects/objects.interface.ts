import { IObject } from '@/components/shared/ObjectCard/object-card.interface';
import { pagesUri } from '@/constants/pages'
import { DocumentNode } from 'graphql'

export type TPages = 'home' | 'lounges' | 'pavilions';

export interface IObjectsData extends Array<IObject> {}

export interface IObjectItem extends IObject {
	index: number;
}

export interface IObjectsQuery {
	objectsQuery: DocumentNode;
	page: TPages,
}