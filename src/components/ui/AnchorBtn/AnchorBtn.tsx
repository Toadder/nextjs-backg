'use client';

import { FC } from 'react';

import { scrollToBlock } from '@/utils/window/scrollToBlock';

interface IAnchorBtn {
	blockId: string;
	text: string;
	className?: string;
}

const AnchorBtn: FC<IAnchorBtn> = ({ blockId, className, text }) => {
	return (
		<div className={className} onClick={() => scrollToBlock(blockId)}>
			{text}
		</div>
	);
};

export default AnchorBtn;
