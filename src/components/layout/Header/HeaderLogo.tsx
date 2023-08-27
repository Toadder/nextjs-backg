import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Header.module.scss';

const HeaderLogo: FC<{ hideMenu: () => void }> = ({ hideMenu }) => {
	return (
		<Link href="/" className={styles.logo} onClick={hideMenu}>
			<Image
				src="/static/logo.webp"
				width={180}
				height={51}
				alt=""
				sizes="(min-width: 768px) 11.875rem, 8.4375rem"
				priority
			/>
		</Link>
	);
};

export default HeaderLogo;
