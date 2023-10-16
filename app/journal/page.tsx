import { Metadata, NextPage } from 'next'
import { use } from 'react'

import Journal from '@/components/screens/journal/Journal'
import journalService from '@/components/screens/journal/journal.service'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.journal)

const JournalPage: NextPage = () => {
	const { error, journalData, hasNextPage, endCursor } = use(
		journalService.getData()
	)

	if (error) {
		console.error(error)
		return
	}

	return (
		<Journal
			items={journalData}
			hasNextPage={hasNextPage}
			endCursor={endCursor}
		/>
	)
}

export default JournalPage
