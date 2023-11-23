import { FC, use } from 'react'

import eventService from '@/services/event.service'

import Content from './Content/Content'
import Examples from './Examples/Examples'
import Intro from './Intro/Intro'
import Place from './Place/Place'
import Speaker from './Speaker/Speaker'
import Themes from './Themes/Themes'
import Waiting from './Waiting/Waiting'

const Event: FC<{ slug: string }> = ({ slug }) => {
	const { error, generalSettings, eventData, eventWidget } = use(
		eventService.getData(slug)
	)

	if (error) {
		console.error(error)
		return
	}

	return (
		<>
			<Intro
				isBlockHidden={eventData?.acfEventData?.isintrohidden}
				title={eventData?.title}
				subtitle={eventData?.acfEventData?.introsubtitle}
				dateTime={eventData?.acfEventData?.introdate}
				city={eventData?.acfEventData?.introcity}
				videoId={eventData?.acfEventData?.introvideo}
			/>
			<Content
				isBlockHidden={eventData?.acfEventData?.iscontenthidden}
				content={eventData?.acfEventData?.contentinner}
			/>
			<Waiting
				isBlockHidden={eventData?.acfEventData?.iswaitinghidden}
				title={eventData?.acfEventData?.waitingtitle}
				items={eventData?.acfEventData?.waitingitems}
			/>
			<Speaker
				isBlockHidden={eventData?.acfEventData?.isspeakerhidden}
				title={eventData?.acfEventData?.speakertitle}
				image={eventData?.acfEventData?.speakerimage}
				content={eventData?.acfEventData?.speakercontent}
			/>
			<Themes
				isBlockHidden={eventData?.acfEventData?.isthemeshidden}
				title={eventData?.acfEventData?.themestitle}
				items={eventData?.acfEventData?.themesitems}
				eventWidget={eventWidget}
			/>
			<Place
				isBlockHidden={eventData?.acfEventData?.isplacehidden}
				title={eventData?.acfEventData?.placetitle}
				place={eventData?.acfEventData?.placeobject}
				slider={eventData?.acfEventData?.placeslider}
				eventWidget={eventWidget}
				address={generalSettings?.address}
				addressLink={generalSettings?.addresslink}
			/>
			<Examples
				isBlockHidden={eventData?.acfEventData?.isexampleshidden}
				title={eventData?.acfEventData?.examplestitle}
				items={eventData?.acfEventData?.examplesitems}
			/>
		</>
	)
}

export default Event
