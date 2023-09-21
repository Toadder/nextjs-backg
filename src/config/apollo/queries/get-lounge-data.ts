import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';

export const GET_LOUNGE_DATA = gql`
	query GET_LOUNGE_DATA($slug: ID!) {
		lounge(id: $slug, idType: SLUG) {
			acfLoungeFields {
				introslider {
					...ImageFragment
				}
				exampleslider {
					caption
					image {
						...ImageFragment
					}
				}
				maintitle
				mainvideomp4 {
					mediaItemUrl
				}
				mainvideowebm {
					mediaItemUrl
				}
				maincontent
				layout {
					...ImageFragment
				}
				layoutcontent
				layoutproperties {
					icon {
						...ImageFragment
					}
					title
					excerpt
					content
				}
				iframesrc
				iframeclass
				iframestyles
			}
		}
	}
	${imageFragment}
`;
