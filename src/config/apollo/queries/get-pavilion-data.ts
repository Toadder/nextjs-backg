import { gql } from '@apollo/client';

import { imageFragment } from '../fraqments/image';

export const GET_PAVILION_DATA = gql`
	query GET_PAVILION_DATA($slug: ID!) {
		generalSettings {
			acfSettings {
				phone
				whatsapp
			}
		}
		pavilion(id: $slug, idType: SLUG) {
			acfPavilionFields {
				benefitslider {
					image {
						...ImageFragment
					}
					title
					content
				}
				maintitle
				maincontent
				mainslider {
					altText
					sourceUrl
				}
				mainlayout {
					altText
					sourceUrl
				}
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
				}
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
`;
