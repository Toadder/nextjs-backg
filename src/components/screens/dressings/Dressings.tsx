'use client';

import { useEffect } from 'react';
import { FC } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { scrollToBlock } from '@/utils/window/scrollToBlock';

import styles from './Dressings.module.scss';
import DressingsItem from './DressingsItem';
import { IDressings } from './dressings.interface';
import { useRouter, usePathname } from 'next/navigation'

const Dressings: FC<IDressings> = ({ items, slug }) => {
	if (!items?.length) return;

	const router = useRouter();
	const pathname = usePathname();
	const isMobile: boolean | null = useMediaQuery('(max-width: 80em)');

	useEffect(() => {
		scrollToBlock(`#${slug}`, isMobile);
		router.replace(pathname, { scroll: false })
	}, []);

	return (
		<div className={styles.root}>
			{items?.map((item) => <DressingsItem key={item?.id} {...item} />)}
		</div>
	);
};

export default Dressings;
