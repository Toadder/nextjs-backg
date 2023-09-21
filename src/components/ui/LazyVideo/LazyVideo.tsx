'use client';

import cn from 'clsx';
import { FC, useRef, useState } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import Spinner from '../Spinner/Spinner';

import styles from './LazyVideo.module.scss';

interface ILazyVideo {
	videoMp4?: string;
	videoWebm?: string;
	className?: string;
	spinnerClassName?: string;
}

const LazyVideo: FC<ILazyVideo> = ({
	videoMp4,
	videoWebm,
	className,
	spinnerClassName
}) => {
	if (!videoMp4?.length && !videoWebm?.length) return;

	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});
	const isVisible = Boolean(entry?.isIntersecting);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	return (
		<div className={cn(styles.video, className)} ref={ref}>
			{!isVisible || isLoading ? (
				<Spinner className={spinnerClassName} />
			) : null}
			{isVisible && (
				<video
					autoPlay
					muted
					loop
					playsInline
					onLoadedData={() => setIsLoading(false)}
				>
					{videoMp4?.length ? <source src={videoMp4} type="video/mp4" /> : null}
					{videoWebm?.length ? (
						<source src={videoWebm} type="video/webm" />
					) : null}
				</video>
			)}
		</div>
	);
};

export default LazyVideo;
