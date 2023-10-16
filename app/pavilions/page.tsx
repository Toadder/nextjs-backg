import { Metadata, NextPage } from 'next'

import Home from '@/components/screens/home/Home'

import { getMetadata } from '@/utils/seo/getMetadata'

import { GET_PAVILIONS_OBJECTS_DATA } from '@/config/apollo/queries/get-objects-data'

import { pagesUri } from '@/constants/pages'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.pavilions)

const PavilionsPage: NextPage = () => (
	<Home objectsQuery={GET_PAVILIONS_OBJECTS_DATA} page="pavilions" />
)

export default PavilionsPage
