import { Open_Sans, Raleway } from 'next/font/google';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import Layout from '@/components/layout/Layout';

import '@/assets/styles/globals.scss';

const openSans = Open_Sans({
	weight: ['400', '500', '600', '800'],
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
			<body className={`${openSans.variable}`}>
				<Layout>
					<Header />
					<main className="main">{children}</main>
					<Footer />
				</Layout>
			</body>
		</html>
	);
}
