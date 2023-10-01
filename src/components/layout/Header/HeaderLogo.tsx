import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Header.module.scss';
import { IHeaderLogo } from './header.interface';

const HeaderLogo: FC<IHeaderLogo> = ({ logo, hideMenu }) => {
	if (!logo) return;

	return (
		<Link href="/" className={styles.logo} onClick={hideMenu}>
			<Image
				src={logo.sourceUrl || ''}
				width={logo.mediaDetails?.width || 0}
				height={logo.mediaDetails?.height || 0}
				alt={logo.altText || ''}
				sizes={`(min-width: 48em) ${
					(logo.mediaDetails?.width! / 16) * 1.15
				}rem, 8.4375rem`}
				priority
			/>
		</Link>
	);
};

export default HeaderLogo;
