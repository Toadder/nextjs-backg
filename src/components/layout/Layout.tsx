'use client';

import { ApolloProvider } from '@apollo/client/react';
import { YMaps } from '@pbe/react-yandex-maps';
import { JournalProvider } from 'context/JournalContext/JournalContext';
import { PopupProvider } from 'context/PopupContext/PopupContext';
import { FC, ReactNode } from 'react';

import client from '@/config/apollo/client';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			<YMaps>
				<PopupProvider>
					<JournalProvider>
						<div className="layout">{children}</div>
					</JournalProvider>
				</PopupProvider>
			</YMaps>
		</ApolloProvider>
	);
};

export default Layout;
