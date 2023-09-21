'use client';

import { ApolloProvider } from '@apollo/client/react';
import { YMaps } from '@pbe/react-yandex-maps';
import { FC, ReactNode } from 'react';

import client from '@/config/apollo/client';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			<YMaps>
				<div className="layout">{children}</div>
			</YMaps>
		</ApolloProvider>
	);
};

export default Layout;
