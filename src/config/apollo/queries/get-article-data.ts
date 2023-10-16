import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

export const GET_ARTICLE_DATA = gql`
	query GET_ARTICLE_DATA(
		$slug: ID!
		$articlesQty: Int!
		$commentsQty: Int!
		$commentsCursor: String = null
	) {
		journal(id: $slug, idType: SLUG) {
			id
			databaseId
			title
			date
			content
			acfJournalData {
				mainslider {
					...ImageFragment
				}
			}
			comments(first: $commentsQty, after: $commentsCursor) {
				nodes {
					id
					date
					content
					author {
						node {
							name
						}
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
		allJournal(first: $articlesQty) {
			edges {
				node {
					id
					title
					uri
					acfJournalData {
						previewcontent
						previewimage {
							...ImageFragment
						}
					}
				}
			}
		}
	}
	${imageFragment}
`
