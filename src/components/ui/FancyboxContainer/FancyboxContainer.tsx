'use client';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { ComponentOptionsType as FancyboxOptionsType } from '@fancyapps/ui/types/Fancybox/options';
import { FC, ReactNode, useEffect, useRef } from 'react';

interface IFancyboxContainer {
	children: ReactNode;
	className?: string;
	delegate?: string;
	options?: Partial<FancyboxOptionsType>;
}

const FancyboxContainer: FC<IFancyboxContainer> = ({
	children,
	className,
	delegate,
	options
}) => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;

		const _delegate = delegate || '[data-fancybox]';
		const _options = options || {};

		NativeFancybox.bind(container, _delegate, _options);

		return () => {
			NativeFancybox.unbind(container);
			NativeFancybox.close();
		};
	});

	return (
		<div className={className} ref={containerRef}>
			{children}
		</div>
	);
};

export default FancyboxContainer;
