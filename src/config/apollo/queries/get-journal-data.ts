import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

export const GET_ARTICLES_DATA = gql`
	query GET_ARTICLES_DATA($first: Int!, $after: String = null) {
		allJournal(first: $first, after: $after) {
			edges {
				node {
					id
					uri
					title
					acfJournalData {
						dynamicpreivewheight
						previewcontent
						previewimage {
							...ImageFragment
						}
					}
				}
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
	}
	${imageFragment}
`

export const GET_JOURNAL_DATA = gql`
	query GET_JOURNAL_DATA(
		$take: Int!
		$articleCursor: String = null
		$eventCursor: String = null
	) {
		allJournal(first: $take, after: $articleCursor) {
			edges {
				node {
					id
					uri
					title
					date
					contentTypeName
					acfJournalData {
						dynamicpreivewheight
						previewcontent
						previewimage {
							...ImageFragment
						}
					}
				}
				cursor
			}
			pageInfo {
				hasNextPage
			}
		}
		events(first: $take, after: $eventCursor) {
			edges {
				node {
					id
					uri
					title
					date
					contentTypeName
					acfEventData {
						dynamicpreivewheight
						previewcontent
						previewstatus
						previewimage {
							...ImageFragment
						}
					}
				}
				cursor
			}
			pageInfo {
				hasNextPage
			}
		}
	}
	${imageFragment}
`
