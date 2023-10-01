'use client';

import { ApolloProvider } from '@apollo/client/react';
import { YMaps } from '@pbe/react-yandex-maps';
import { PopupProvider } from 'context/PopupContext/PopupContext';
import { FC, ReactNode } from 'react';

import client from '@/config/apollo/client';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			<YMaps>
				<PopupProvider>
					<div className="layout">{children}</div>
				</PopupProvider>
			</YMaps>
		</ApolloProvider>
	);
};

export default Layout;
