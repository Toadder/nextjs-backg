import { IObject } from '@/components/shared/ObjectCard/object-card.interface'

import { Dressing, Lounge, Pavilion } from '@/shared/types/grahpql.types'

type TNode = Lounge | Pavilion | Dressing

interface ICommonFields {
	id: Lounge['id']
	title: Lounge['title']
	link: Lounge['uri']
}

export const parseToObjectType = (node: TNode): IObject | null => {
	const commonFields: ICommonFields = {
		id: node?.id,
		title: node?.title,
		link: node?.uri
	}

	if (node.__typename === 'Pavilion') {
		return {
			...commonFields,
			priority: node?.acfPavilionFields?.priority,
			image: node?.acfPavilionFields?.previewimage,
			excerpt: node?.acfPavilionFields?.previewcontent,
			label: node?.acfPavilionFields?.previewlabel,
			hiddenOn: node?.acfPavilionFields?.hiddenon
		}
	} else if (node.__typename === 'Lounge') {
		return {
			...commonFields,
			priority: node?.acfLoungeFields?.priority,
			image: node?.acfLoungeFields?.previewimage,
			excerpt: node?.acfLoungeFields?.previewcontent,
			label: node?.acfLoungeFields?.previewlabel,
			hiddenOn: node?.acfLoungeFields?.hiddenon
		}
	} else if (node.__typename === 'Dressing') {
		return {
			...commonFields,
			priority: node?.acfDressingFields?.priority,
			image: node?.acfDressingFields?.previewimage,
			excerpt: node?.acfDressingFields?.previewcontent,
			label: node?.acfDressingFields?.previewlabel,
			hiddenOn: node?.acfDressingFields?.hiddenon,
			link: node?.uri
				?.replace(node?.slug || '', `?dressing=${node?.slug}`)
				?.replace(/\/$/, '')
		}
	}

	return null
}
