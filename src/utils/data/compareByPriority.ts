import { IObject } from '@/components/shared/ObjectCard/object-card.interface'

export const compareByPriority = (a: IObject, b: IObject): number => {
	if(a?.priority && b?.priority) return a.priority - b.priority;
	if(!a?.priority && !b?.priority) return 0;
	return a?.priority ? -1 : 1;
};