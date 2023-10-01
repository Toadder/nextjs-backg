'use client';

import { FC } from 'react';

import { scrollToBlock } from '@/utils/window/scrollToBlock';

interface IAnchorBtn {
	selector: string;
	text: string;
	className?: string;
}

const AnchorBtn: FC<IAnchorBtn> = ({ selector, className, text }) => {
	return (
		<div className={className} onClick={() => scrollToBlock(selector)}>
			{text}
		</div>
	);
};

export default AnchorBtn;
