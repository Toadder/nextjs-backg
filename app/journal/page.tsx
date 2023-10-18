import { Metadata, NextPage } from 'next'
import { use } from 'react'

import Journal from '@/components/screens/journal/Journal'
import journalService from '@/components/screens/journal/journal.service'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.journal)

const JournalPage: NextPage = () => {
	const {
		error,
		items,
		isNextArticlesExist,
		isNextEventsExist,
		articleCursor,
		eventCursor
	} = use(journalService.getData())

	if (error) {
		console.error(error)
		return
	}

	return (
		<Journal
			items={items}
			isNextArticlesExist={isNextArticlesExist}
			isNextEventsExist={isNextEventsExist}
			articleCursor={articleCursor}
			eventCursor={eventCursor}
		/>
	)
}

export default JournalPage
