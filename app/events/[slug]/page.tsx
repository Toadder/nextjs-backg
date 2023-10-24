import { Metadata } from 'next'

import Event from '@/components/screens/event/Event'

import { INextContext } from '@/shared/types/next.types'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const dynamic = 'force-dynamic'

export const generateMetadata = (context: INextContext): Promise<Metadata> => {
	const { slug } = context?.params
	return getMetadata(`${pagesUri.events}/${slug}`)
}

const EventPage = (context: INextContext) => {
	const slug = context?.params?.slug || ''
	return <Event slug={slug} />
}

export default EventPage
