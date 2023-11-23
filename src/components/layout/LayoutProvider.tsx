'use client'

import { ApolloProvider } from '@apollo/client/react'
import { YMaps } from '@pbe/react-yandex-maps'
import { JournalProvider } from 'context/JournalContext/JournalContext'
import { PartnerProvider } from 'context/PartnerContext/PartnerContext'
import { PopupProvider } from 'context/PopupContext/PopupContext'
import { FC, ReactNode } from 'react'

import client from '@/config/apollo/client'

const LayoutProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			<YMaps>
				<PopupProvider>
					<PartnerProvider>
						<JournalProvider>
							<div className="layout">{children}</div>
						</JournalProvider>
					</PartnerProvider>
				</PopupProvider>
			</YMaps>
		</ApolloProvider>
	)
}

export default LayoutProvider
