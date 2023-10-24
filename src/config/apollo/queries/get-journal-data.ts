import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

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

export const GET_ARTICLES_DATA = gql`
	query GET_ARTICLES_DATA($take: Int!, $cursor: String = null) {
		allJournal(first: $take, after: $cursor) {
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
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
	}
	${imageFragment}
`

export const GET_EVENTS_DATA = gql`
	query GET_EVENTS_DATA($take: Int!, $cursor: String = null) {
		events(first: $take, after: $cursor) {
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
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
	}
	${imageFragment}
`
