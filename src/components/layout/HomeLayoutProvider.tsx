'use client'

import { usePathname } from 'next/navigation'
import { FC, ReactNode } from 'react'

import Announcement from '@/components/shared/Announcement/Announcement'

const isHomePage = (pathname: string): boolean => {
	const regex: RegExp = /^\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+$/
	return !regex.test(pathname)
}

const HomeLayoutProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const pathname = usePathname()

	return (
		<>
			{isHomePage(pathname) && <Announcement />}
			{children}
		</>
	)
}

export default HomeLayoutProvider
