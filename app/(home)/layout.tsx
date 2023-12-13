import { ReactNode } from 'react'

import HomeLayoutProvider from '@/components/layout/HomeLayoutProvider'

export default function HomeLayout({ children }: { children: ReactNode }) {
	return <HomeLayoutProvider>{children}</HomeLayoutProvider>
}
