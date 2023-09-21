import { gql } from '@apollo/client';

export const GET_PAGE_METADATA = gql`
	query GET_PAGE_METADATA($id: ID!) {
		page(id: $id, idType: URI) {
			seo {
				title
				canonical
				focuskw
				metaDesc
				metaRobotsNofollow
				metaRobotsNoindex
				opengraphDescription
				opengraphImage { sourceUrl }
				opengraphSiteName
				opengraphTitle
				opengraphType
				opengraphUrl
			}
		}
	}
`;