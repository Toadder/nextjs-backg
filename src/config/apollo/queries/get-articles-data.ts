import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';

export const GET_ARTICLES_DATA = gql`
	query GET_ARTICLES_DATA($first: Int!, $after: String = null) {
		allJournal(first: $first, after: $after) {
			edges {
				node {
					id
					uri
					title
					acfJournalData {
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
`;
