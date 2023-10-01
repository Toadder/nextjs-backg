'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect } from 'react';

import { scrollToBlock } from '@/utils/window/scrollToBlock';

import styles from './Dressings.module.scss';
import DressingsItem from './DressingsItem';
import { IDressings } from './dressings.interface';

const Dressings: FC<IDressings> = ({ slug, items }) => {
	if (!items?.length) return;

	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		scrollToBlock(`#${slug}`);
		router.replace(pathname, { scroll: false });
	}, []);

	return (
		<div className={styles.root}>
			{items?.map((item) => <DressingsItem key={item?.id} {...item} />)}
		</div>
	);
};

export default Dressings;
