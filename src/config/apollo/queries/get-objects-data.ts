import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

import { pagesUri } from '@/constants/pages'

type TAcfName = 'acfLoungeFields' | 'acfPavilionFields' | 'acfDressingFields'
type TPriorityName = 'priority' | 'loungespriority' | 'pavilionspriority'

const generateObjectFields = (
	acfName: TAcfName,
	priorityName: TPriorityName
): string => `
	id
	title
	uri
	${acfName} {
		priority: ${priorityName}
		hiddenon
		previewcontent
		previewimage {
			...ImageFragment
		}
		previewlabel
	}
`

export const GET_OBJECTS_DATA = gql`
	query GET_OBJECTS_DATA {
		fields: page(id: "${pagesUri.home}", idType: URI) {
			acfPageFields: acfHomeFields {
				isobjectshidden
			}
		}
		lounges {
			edges {
				node { ${generateObjectFields('acfLoungeFields', 'priority')} }
			}
		}
		pavilions {
			edges {
				node { ${generateObjectFields('acfPavilionFields', 'priority')} }
			}
		}
		dressings {
			edges {
				node {
					slug
					${generateObjectFields('acfDressingFields', 'priority')}
				}
			}
		}
	}
	${imageFragment}
`

export const GET_LOUNGES_OBJECTS_DATA = gql`
	query GET_LOUNGES_OBJECTS_DATA {
		fields: page(id: "${pagesUri.lounges}", idType: URI) {
			acfPageFields: acfLoungesFields {
				isobjectshidden
			}
		}
		lounges {
			edges {
				node { ${generateObjectFields('acfLoungeFields', 'loungespriority')} }
			}
		}
		dressings {
			edges {
				node { 
					slug 
					${generateObjectFields('acfDressingFields', 'loungespriority')} 
				}
			}
		}
	}
	${imageFragment}
`

export const GET_PAVILIONS_OBJECTS_DATA = gql`
	query GET_PAVILIONS_OBJECTS_DATA {
		fields: page(id: "${pagesUri.pavilions}" idType: URI) {
			acfPageFields: acfPavilionsFields {
				isobjectshidden
			}
		}
		pavilions {
			edges {
				node { ${generateObjectFields('acfPavilionFields', 'pavilionspriority')} }
			}
		}
		dressings {
			edges {
				node {
					slug
					${generateObjectFields('acfDressingFields', 'pavilionspriority')}
				}
			}
		}
	}
	${imageFragment}
`
