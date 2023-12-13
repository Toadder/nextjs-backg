import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

import { pagesUri } from '@/constants/pages'

export const GET_PRICE_DATA = gql`
	query GET_PRICE_DATA {
		fields: page(id: "${pagesUri.price}", idType: URI) {
			content
			acfPriceFields {
				pricetitle
				priceimage {
					...ImageFragment
				}
				pricefile {
					mediaItemUrl
				}
			}
		}
	}
	${imageFragment}
`
