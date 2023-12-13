import { Metadata, NextPage } from 'next'

import Home from '@/components/screens/home/Home'

import { getMetadata } from '@/utils/seo/getMetadata'

import { GET_LOUNGES_OBJECTS_DATA } from '@/config/apollo/queries/get-objects-data'

import { pagesUri } from '@/constants/pages'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.lounges)

const LoungesPage: NextPage = () => (
	<Home objectsQuery={GET_LOUNGES_OBJECTS_DATA} page="lounges" />
)

export default LoungesPage
