'use client';

import { FC, PropsWithChildren, createContext, useState } from 'react';

import { IPartnerContext } from './partner-context.interface';

export const DEFAULT_PARTNER_CONTEXT: IPartnerContext = {
	message: '',
	setMessage: () => {}
};

export const PartnerContext = createContext<IPartnerContext>(
	DEFAULT_PARTNER_CONTEXT
);

export const PartnerProvider: FC<PropsWithChildren> = ({ children }) => {
	const [message, setMessage] = useState<string>('');

	const updateMsg = (msg: string) => setMessage(msg);

	return (
		<PartnerContext.Provider
			value={{
				message,
				setMessage: updateMsg
			}}
		>
			{children}
		</PartnerContext.Provider>
	);
};
