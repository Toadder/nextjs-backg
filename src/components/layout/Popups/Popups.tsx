'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import Greeting from './Greeting/Greeting'
import Messenger from './Messenger/Messenger'
import { IPopups } from './popups.interface'
import { pagesUri } from '@/constants/pages'

const DynamicBecomePartner = dynamic(
	() => import('./BecomePartner/BecomePartner')
)

const DynamicAboutPartner = dynamic(() => import('./AboutPartner/AboutPartner'))

const Popups: FC<IPopups> = ({
	whatsapp,
	telegram,
	cooperationTypes,
	destination
}) => {
	const pathname = usePathname()

	return (
		<>
			<Messenger whatsapp={whatsapp} telegram={telegram} />
			{pathname === pagesUri.partners && (
				<>
					<DynamicBecomePartner
						cooperationTypes={cooperationTypes}
						destination={destination}
					/>
					<DynamicAboutPartner />
				</>
			)}
			<Greeting />
		</>
	)
}

export default Popups
