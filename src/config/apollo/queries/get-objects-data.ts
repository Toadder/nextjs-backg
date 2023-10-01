import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';
import { pagesUri } from '@/constants/pages'

export const GET_OBJECTS_DATA = gql`
	query GET_OBJECTS_DATA {
		fields: page(id: "${pagesUri.home}", idType: URI) {
			acfHomeFields {
				isobjectshidden
			}
		}
		lounges {
			edges {
				node {
					id
					title
					uri
					acfLoungeFields {
						priority
						previewcontent
						previewimage {
							...ImageFragment
						}
						previewlabel
					}
				}
			}
		}
		pavilions {
			edges {
				node {
					id
					title
					uri
					acfPavilionFields {
						previewcontent
						previewimage {
							...ImageFragment
						}
						priority
						previewlabel
					}
				}
			}
		}
		dressings {
			edges {
				node {
					id
					title
					uri
					slug
					acfDressingFields {
						priority
						previewcontent
						previewimage {
							...ImageFragment
						}
						previewlabel
					}
				}
			}
		}
	}
	${imageFragment}
`;
