import { Metadata } from 'next'

import Article from '@/components/screens/article/Article'

import { INextContext } from '@/shared/types/next.types'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const dynamic = 'force-dynamic'

export const generateMetadata = (context: INextContext): Promise<Metadata> => {
	const { slug } = context?.params
	return getMetadata(`${pagesUri.journal}/${slug}`)
}

const ArticlePage = (context: INextContext) => {
	const slug = context?.params?.slug || ''
	return <Article slug={slug} />
}

export default ArticlePage
