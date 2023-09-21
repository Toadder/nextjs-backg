import { IObject } from '@/components/shared/ObjectCard/object-card.interface';

import { Dressing, Lounge, Pavilion } from '@/shared/types/grahpql.types';

type TNode = Lounge | Pavilion | Dressing;

interface ICommonFields extends Pick<Lounge, 'id' | 'title' | 'slug'> {
	link: Lounge['uri'];
}

export const parseToObjectType = (node: TNode): IObject | null => {
	const commonFields: ICommonFields = {
		id: node?.id,
		title: node?.title,
		link: node?.uri
	};

	if ('acfPavilionFields' in node) {
		return {
			...commonFields,
			image: node?.acfPavilionFields?.previewimage,
			excerpt: node?.acfPavilionFields?.previewcontent,
			label: node?.acfPavilionFields?.previewlabel
		};
	} else if ('acfLoungeFields' in node) {
		return {
			...commonFields,
			image: node?.acfLoungeFields?.previewimage,
			excerpt: node?.acfLoungeFields?.previewcontent,
			label: node?.acfLoungeFields?.previewlabel
		};
	} else if ('acfDressingFields' in node) {
		return {
			...commonFields,
			image: node?.acfDressingFields?.previewimage,
			excerpt: node?.acfDressingFields?.previewcontent,
			label: node?.acfDressingFields?.previewlabel,
			link: node?.uri
				?.replace(node?.slug || '', `?dressing=${node?.slug}`)
				?.replace(/\/$/, '')
		};
	}

	return null;
};
