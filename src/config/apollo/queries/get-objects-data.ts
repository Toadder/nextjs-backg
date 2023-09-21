import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';

export const GET_OBJECTS_DATA = gql`
	query GET_OBJECTS_DATA {
		lounges {
			edges {
				node {
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
