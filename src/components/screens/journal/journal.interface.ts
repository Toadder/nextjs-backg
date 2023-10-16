import {
	Journal,
	Journal_Acfjournaldata as JournalAcfSettings
} from '@/shared/types/grahpql.types'

interface IJournalNode {
	node: Journal
}

export interface IJournalData extends Array<IJournalNode> {}

export interface IJournal {
	items: IJournalData
	hasNextPage: boolean
	endCursor: string | null
}

export interface IJournalItem extends Pick<Journal, 'title'> {
	index: number
	masonryHeight: number
	link: Journal['uri']
	image: JournalAcfSettings['previewimage']
	excerpt: JournalAcfSettings['previewcontent']
}
