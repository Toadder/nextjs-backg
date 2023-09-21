import { IObject } from '@/components/shared/ObjectCard/object-card.interface';

export interface IObjectsData extends Array<IObject> {}

export interface IObjectItem extends IObject {
	index: number;
}
