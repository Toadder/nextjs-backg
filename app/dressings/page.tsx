import { Metadata } from 'next'
import { use } from 'react'

import Dressings from '@/components/screens/dressings/Dressings'
import dressingsService from '@/components/screens/dressings/dressings.service'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.dressings)

const DressingsPage = () => {
	const { error, dressingsData } = use(dressingsService.getData())

	if (error) {
		console.error(error)
		return
	}

	return <Dressings items={dressingsData} />
}

export default DressingsPage
