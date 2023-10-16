'use client'

import { FC, useEffect } from 'react'

import Spinner from '../Spinner/Spinner'

const PageLoader: FC = () => {
	useEffect(() => window?.scrollTo(0, 0), [])

	return (
		<div className="page-loader">
			<Spinner />
		</div>
	)
}

export default PageLoader
