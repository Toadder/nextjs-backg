'use client';

import { YMaps } from '@pbe/react-yandex-maps';

import React, { FC, ReactNode } from 'react'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<YMaps>
			<div className='layout'>
				{children}
			</div>
		</YMaps>
	)
}

export default Layout