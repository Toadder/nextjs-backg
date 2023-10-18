import { MediaItem } from '@/shared/types/grahpql.types'

type TJournalSize = 'big' | 'small'

export interface IJournalCard {
	title: string
	link: string
	image: MediaItem | null
	excerpt: string
	label?: string

	imageSizes: string
	isImagePreloaded?: boolean
	size?: TJournalSize
}
