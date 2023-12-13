import { Metadata, NextPage } from 'next'
import { use } from 'react'

import Price from '@/components/screens/price/Price'

import priceService from '@/services/price.service'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.price)

const PricePage: NextPage = () => {
	const { error, priceData } = use(priceService.getData())

	if (error) {
		console.error(error)
		return
	}

	return (
		<Price
			title={priceData?.pricetitle}
			content={priceData?.content}
			image={priceData?.priceimage}
			file={priceData?.pricefile}
		/>
	)
}

export default PricePage
