import { IJournalItem } from '@/components/screens/journal/journal.interface'

type TJournalSize = 'big' | 'small';

export interface IJournalCard extends IJournalItem {
	imageSizes: string;
	size?: TJournalSize;
}