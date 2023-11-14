import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

export const GET_PAVILION_DATA = gql`
	query GET_PAVILION_DATA($slug: ID!) {
		generalSettings {
			acfSettings {
				phone
			}
		}
		pavilion(id: $slug, idType: SLUG) {
			acfPavilionFields {
				isbenefithidden
				benefitslider {
					image {
						...ImageFragment
					}
					title
					content
				}
				ismainhidden
				maintitle
				maincontent
				mainproperties {
					icon {
						...ImageFragment
					}
					title
					excerpt
					content
				}
				mainslider {
					altText
					sourceUrl
				}
				mainlayout {
					altText
					sourceUrl
				}
				isexamplehidden
				exampleslider {
					caption
					image {
						...ImageFragment
					}
				}
				issimilarloungeshidden
				titlesimilarlounges
				similarlounges {
					... on Pavilion {
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
				isequipmenthidden
				titleequipment
				equipment {
					... on Equipment {
						id
						title
						acfEquipmentFields {
							content
							contentalignhorizontal
							contentalignvertical
							label
							image {
								...ImageFragment
							}
						}
					}
				}
				israteshidden
				titlerates
				contentrates
				rates {
					name
					time
					price
					unit
					properties {
						property
					}
					content
					label
				}
			}
		}
	}
	${imageFragment}
`
