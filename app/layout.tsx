import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import Layout from '@/components/layout/Layout';

import '@/assets/styles/globals.scss';

const raleway = localFont({
	src: './Raleway-BlackItalic.ttf',
	weight: '900',
	style: 'italic',
	variable: '--font-raleway',
	display: 'swap'
});

const openSans = Open_Sans({
	weight: ['400', '500', '600', '800'],
	display: 'swap',
	style: 'normal',
	variable: '--font-open-sans',
	subsets: ['cyrillic']
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={`${openSans.variable} ${raleway.variable}`}>
				<Layout>
					<Header />
					<main className="main">{children}</main>
					<Footer />
				</Layout>
			</body>
		</html>
	);
}
