import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';

export const GET_LOUNGE_DATA = gql`
	query GET_LOUNGE_DATA($slug: ID!) {
		lounge(id: $slug, idType: SLUG) {
			acfLoungeFields {
				isintrohidden
				introslider {
					...ImageFragment
				}
				isexamplehidden
				exampleslider {
					caption
					image {
						...ImageFragment
					}
				}
				ismainhidden
				maintitle
				mainvideomp4 {
					mediaItemUrl
				}
				mainvideowebm {
					mediaItemUrl
				}
				maincontent
				islayouthidden
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
				issimilarloungeshidden
				titlesimilarlounges
				similarlounges {
					... on Lounge {
						id
						title
						uri
						acfLoungeFields {
							previewcontent
							previewimage {
								...ImageFragment
							}
							previewlabel
						}
					}
				}
				isiframehidden
				iframesrc
				iframeclass
				iframestyles
			}
		}
	}
	${imageFragment}
`;
