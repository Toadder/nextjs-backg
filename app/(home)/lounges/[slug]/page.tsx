import { Metadata } from 'next'

import Lounge from '@/components/screens/lounge/Lounge'

import { INextContext } from '@/shared/types/next.types'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const dynamic = 'force-dynamic'

export const generateMetadata = (context: INextContext): Promise<Metadata> => {
	const { slug } = context?.params
	return getMetadata(`${pagesUri.lounges}/${slug}`)
}

const LoungePage = (context: INextContext) => {
	const slug = context?.params?.slug || ''
	return <Lounge slug={slug} />
}

export default LoungePage
