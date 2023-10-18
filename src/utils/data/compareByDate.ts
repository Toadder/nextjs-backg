import { IJournalNode } from '@/components/screens/journal/journal.interface'

export const compareByDate = (a: IJournalNode, b: IJournalNode): number => {
	if (!a?.node?.date || !b?.node?.date) return 0

	const aDate = new Date(a.node.date)
	const bDate = new Date(b.node.date)

	return bDate.getTime() - aDate.getTime()
}
