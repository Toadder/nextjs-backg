import { IJournalItem } from '@/components/screens/journal/journal.interface'

type TJournalSize = 'big' | 'small'

export interface IJournalCard
	extends Omit<IJournalItem, 'index' | 'masonryHeight'> {
	imageSizes: string
	isImagePreloaded?: boolean
	size?: TJournalSize
}
