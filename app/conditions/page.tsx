import { Metadata, NextPage } from 'next'

import Conditions from '@/components/screens/conditions/Conditions'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.conditions)

const ConditionsPage: NextPage = () => <Conditions />

export default ConditionsPage
