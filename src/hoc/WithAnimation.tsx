'use client';

import cn from 'clsx';
import { ReactNode, useRef } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface IWithAnimation {
	children: ReactNode;
	className?: string;
}

export const WithAnimation = ({ children, className = '' }: IWithAnimation) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {
		threshold: 0.1
	});
	const isVisible = Boolean(entry?.isIntersecting);

	return (
		<div
			ref={ref}
			className={cn(className, {
				'animate-fade': isVisible,
				'opacity-0': !isVisible
			})}
		>
			{children}
		</div>
	);
};
