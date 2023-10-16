'use client'

import { FC, PropsWithChildren, createContext, useState } from 'react'

import { IPartnerContext } from './partner-context.interface'

export const PartnerContext = createContext<IPartnerContext>({
	message: '',
	setMessage: () => {}
})

export const PartnerProvider: FC<PropsWithChildren> = ({ children }) => {
	const [message, setMessage] = useState<string>('')

	const updateMsg = (msg: string) => setMessage(msg)

	return (
		<PartnerContext.Provider
			value={{
				message,
				setMessage: updateMsg
			}}
		>
			{children}
		</PartnerContext.Provider>
	)
}
