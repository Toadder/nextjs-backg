import { gql } from '@apollo/client'

import { imageFragment } from '../fraqments/image'

export const GET_EVENT_DATA = gql`
	query GET_EVENT_DATA($slug: ID!) {
		generalSettings {
			acfSettings {
				address
				addresslink
				eventwidget
			}
		}
		event(id: $slug, idType: SLUG) {
			title
			acfEventData {
				isintrohidden
				introcity
				introdate
				introsubtitle
				introvideo
				iscontenthidden
				contentinner
				iswaitinghidden
				waitingtitle
				waitingitems {
					content
					icon {
						...ImageFragment
					}
				}
				isspeakerhidden
				speakertitle
				speakerimage {
					...ImageFragment
				}
				speakercontent
				isthemeshidden
				themestitle
				themesitems {
					content
					time
				}
				isplacehidden
				placetitle
				placeobject
				placeslider {
					...ImageFragment
				}
				isexampleshidden
				examplestitle
				examplesitems {
					...ImageFragment
				}
			}
		}
	}
	${imageFragment}
`
