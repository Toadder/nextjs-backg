'use client';

import dynamic from 'next/dynamic';
import { FC, useRef } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { IFooterMap } from '../footer.interface';

import styles from './FooterMap.module.scss';

const DynamicFooterMapInner = dynamic(() => import('./FooterMapInner'));

const FooterMap: FC<IFooterMap> = ({ address, coordinates }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});
	const isVisible = Boolean(entry?.isIntersecting);

	return (
		<div className={styles.map} ref={ref}>
			{isVisible ? (
				<DynamicFooterMapInner address={address} coordinates={coordinates} />
			) : null}
		</div>
	);
};

export default FooterMap;
