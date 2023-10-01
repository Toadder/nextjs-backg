import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import { use, type PropsWithChildren } from 'react'

import Footer from '@/components/layout/Footer/Footer'
import { IFooterData } from '@/components/layout/Footer/footer.interface'
import Header from '@/components/layout/Header/Header'
import { IHeaderData } from '@/components/layout/Header/header.interface'
import Layout from '@/components/layout/Layout'
import Popups from '@/components/layout/Popups/Popups'

import { IAllSettings, IFavicon } from '@/shared/types/next.types'

import '@/assets/styles/globals.scss'

import client from '@/config/apollo/client'
import { GET_LAYOUT_DATA } from '@/config/apollo/queries/get-layout-data'
import { GET_LAYOUT_METADATA } from '@/config/apollo/queries/get-layout-metadata'

const mullerNarrow = localFont({
	src: '../src/assets/fonts/MullerNarrow-ExtraBoldItalic.woff2',
	weight: '800',
	style: 'italic',
	variable: '--font-muller-narrow',
	display: 'swap'
});

const openSans = Open_Sans({
	weight: ['400', '500', '600', '800'],
	display: 'swap',
	style: 'normal',
	variable: '--font-open-sans',
	subsets: ['cyrillic']
});

export const generateMetadata = async (): Promise<Metadata> => {
	const { error, data } = await client.query({ query: GET_LAYOUT_METADATA });
	const allSettings: IAllSettings = data?.allSettings;
	const iconsArray: IFavicon = data?.favicon?.mediaDetails?.sizes;

	if (error) {
		return {};
	}

	return {
		title: allSettings?.generalSettingsTitle,
		applicationName: allSettings?.generalSettingsTitle,
		icons: iconsArray?.map((icon) => {
			const type: string =
				Number(icon?.width) === 180 ? 'apple-touch-icon' : 'image/png';

			return {
				type,
				rel: 'icon',
				sizes: `${icon?.width}x${icon?.width}`,
				url: icon?.sourceUrl || ''
			};
		})
	};
};

const getData = async () => {
	const { error, data } = await client.query({ query: GET_LAYOUT_DATA });

	const paymentLink: string = data?.payment?.acfSettings?.paymentlink || '';

	const headerData: IHeaderData = {
		menu: data?.menu?.edges,
		fields: data?.headerFields?.acfSettings
	};

	const footerData: IFooterData = data?.footerFields?.acfSettings;

	return { error, headerData, footerData, paymentLink };
};

export default function RootLayout({ children }: PropsWithChildren) {
	const { error, headerData, footerData, paymentLink } = use(getData());

	if (error) {
		console.error(error);
		return;
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
					/>
				</Layout>

				{/* App Event */}
				<Script id="aeWidgetScript" src={paymentLink} strategy="lazyOnload" />

				{false && (
					<>
						{/* Google Analytics */}
						<Script
							id="google-gtag"
							src="https://www.googletagmanager.com/gtag/js?id=G-NPQ5CZKW82"
							strategy="afterInteractive"
						/>
						<Script id="google-analytics" strategy="afterInteractive">
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'G-NPQ5CZKW82');
							`}
						</Script>

						{/* Yandex Analytics */}
						<Script id="yandex-counter" strategy="afterInteractive">
							{`
								(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
								m[i].l=1*new Date();
								for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
								k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
								(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
						
								ym(71361751, "init", {
										clickmap:true,
										trackLinks:true,
										accurateTrackBounce:true,
										webvisor:true
								});
							`}
						</Script>
						<noscript>
							<div>
								<img
									src="https://mc.yandex.ru/watch/71361751"
									style={{ position: 'absolute', left: -9999 }}
									alt=""
								/>
							</div>
						</noscript>
					</>
				)}
			</body>
		</html>
	);
}
