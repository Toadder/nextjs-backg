'use client';

import dynamic from 'next/dynamic';
import { FC, useRef } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import styles from './FooterMap.module.scss';

const DynamicFooterMapInner = dynamic(() => import('./FooterMapInner'));

const FooterMap: FC = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});
	const isVisible = Boolean(entry?.isIntersecting);

	return (
		<div className={styles.map} ref={ref}>
			{isVisible ? <DynamicFooterMapInner /> : null}
		</div>
	);
};

export default FooterMap;
