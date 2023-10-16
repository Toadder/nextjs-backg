import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import { type PropsWithChildren, use } from 'react'

import AnalyticLoader from '@/components/layout/AnalyticLoader/AnalyticLoader'
import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import Layout from '@/components/layout/Layout'
import { TCooperationDestination } from '@/components/layout/Popups/BecomePartner/become-partner.interface'
import Popups from '@/components/layout/Popups/Popups'
import layoutService from '@/components/layout/layout.service'

import { IAllSettings, IFavicon } from '@/shared/types/next.types'

import '@/assets/styles/globals.scss'

import client from '@/config/apollo/client'
import { GET_LAYOUT_METADATA } from '@/config/apollo/queries/get-layout-metadata'

/* =>> FONTS <<= */
const mullerNarrow = localFont({
	src: '../src/assets/fonts/MullerNarrow-ExtraBoldItalic.woff2',
	weight: '800',
	style: 'italic',
	variable: '--font-muller-narrow',
	display: 'swap'
})

const openSans = Open_Sans({
	weight: ['400', '500', '600', '800'],
	display: 'swap',
	style: 'normal',
	variable: '--font-open-sans',
	subsets: ['cyrillic']
})
/* =>> /FONTS <<= */

/* =>> SEO <<= */
export const generateMetadata = async (): Promise<Metadata> => {
	const { error, data } = await client.query({ query: GET_LAYOUT_METADATA })
	const allSettings: IAllSettings = data?.allSettings
	const iconsArray: IFavicon = data?.favicon?.mediaDetails?.sizes

	if (error) {
		return {}
	}

	return {
		title: allSettings?.generalSettingsTitle,
		applicationName: allSettings?.generalSettingsTitle,
		icons: iconsArray?.map(icon => {
			const type: string =
				Number(icon?.width) === 180 ? 'apple-touch-icon' : 'image/png'

			return {
				type,
				rel: 'icon',
				sizes: `${icon?.width}x${icon?.width}`,
				url: icon?.sourceUrl || ''
			}
		})
	}
}
/* =>> /SEO <<= */

export default function RootLayout({ children }: PropsWithChildren) {
	const { error, headerData, footerData, popupsData, paymentLink } = use(
		layoutService.getData()
	)

	if (error) {
		console.error(error)
		return
	}

	return (
		<html lang="ru">
			<body className={`${openSans.variable} ${mullerNarrow.variable}`}>
				<Layout>
					<Header data={headerData} />
					<main className="main">{children}</main>
					<Footer data={footerData} />
					<Popups
						whatsapp={footerData?.whatsapp}
						telegram={footerData?.telegram}
						cooperationTypes={popupsData?.cooperationtypes}
						destination={
							popupsData?.cooperationdestination as TCooperationDestination
						}
					/>
				</Layout>

				{/* App Event */}
				<Script id="aeWidgetScript" src={paymentLink} strategy="lazyOnload" />

				{process.env.NODE_ENV === 'production' && (
					<>
						{/* Google && Yandex Metrics */}
						<AnalyticLoader />
					</>
				)}
			</body>
		</html>
	)
}
