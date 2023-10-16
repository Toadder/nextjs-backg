import client from '@/config/apollo/client'
import { GET_ARTICLES_DATA } from '@/config/apollo/queries/get-articles-data'

import { ARTICLES_TO_LOAD } from './journal.constant'
import { IJournalData } from './journal.interface'

class JournalService {
	async getData(after: string | null = null) {
		const { error, data } = await client.query({
			query: GET_ARTICLES_DATA,
			variables: { first: ARTICLES_TO_LOAD, after }
		})
		const journalData: IJournalData = data?.allJournal?.edges
		const hasNextPage: boolean = data?.allJournal?.pageInfo?.hasNextPage
		const endCursor: string | null = data?.allJournal?.pageInfo?.endCursor
		return { error, journalData, hasNextPage, endCursor }
	}
}

export default new JournalService()
