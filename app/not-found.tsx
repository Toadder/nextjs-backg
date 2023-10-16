import { Metadata, NextPage } from 'next'

import NotFound from '@/components/screens/not-found/NotFound'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Страница не найдена',
	robots: { index: false, follow: false }
}

const NotFoundPage: FC = () => <NotFound />

export default NotFoundPage
