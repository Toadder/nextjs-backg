import { IJournalCard } from '@/components/shared/JournalCard/journal-card.interface'

export interface IEventItem
	extends Omit<IJournalCard, 'imageSizes' | 'isImagePreloaded' | 'size'> {
	index: number
	masonryHeight: number
}
