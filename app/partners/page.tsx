import { Metadata, NextPage } from 'next'
import { use } from 'react'

import Partners from '@/components/screens/partners/Partners'

import partnersService from '@/services/partners.service'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.partners)

const PartnersPage: NextPage = () => {
	const { error, title, partners } = use(partnersService.getData())

	if (error) {
		console.error(error)
		return
	}

	return <Partners title={title} partners={partners} />
}

export default PartnersPage
