'use client';

import { FC, useRef } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import styles from './RentalWidget.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';
import { IRentalWidget } from './rental-widget.interface'

const RentalWidget: FC<IRentalWidget> = ({ iframeSrc, iframeClass, iframeStyles }) => {
	if (!iframeSrc?.length || !iframeClass?.length || !iframeStyles?.length) return;

	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});
	const isVisible = Boolean(entry?.isIntersecting);

	return (
		<WithAnimation>
			<div className={styles.root} ref={ref}>
				{isVisible && (
					<iframe
						className={iframeClass}
						src={iframeSrc}
						style={JSON.parse(iframeStyles)}
					/>
				)}
			</div>
		</WithAnimation>
	);
};

export default RentalWidget;
