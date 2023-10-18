import { IJournalCard } from '@/components/shared/JournalCard/journal-card.interface'

export interface IEventsItem
	extends Omit<IJournalCard, 'imageSizes' | 'isImagePreloaded' | 'size'> {
	index: number
	masonryHeight: number
}
