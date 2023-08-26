'use client';

import { FC } from 'react'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { scrollToBlock } from '@/utils/window/scrollToBlock'

interface IAnchorBtn {
	selector: string;
	text: string;
	className?: string;
}

const AnchorBtn: FC<IAnchorBtn> = ({ selector, className, text }) => {
	const isMobile = useMediaQuery('(max-width: 80em)');
	
	return (
		<div className={className} onClick={() => scrollToBlock(selector, isMobile)}>
			{text}
		</div>
	);
};

export default AnchorBtn;
