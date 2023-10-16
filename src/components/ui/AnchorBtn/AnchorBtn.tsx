'use client'

import { FC } from 'react'

import { scrollToBlock } from '@/utils/window/scrollToBlock'

import { IAnchorBtn } from './anchor-btn.interface'

const AnchorBtn: FC<IAnchorBtn> = ({ blockId, className, text }) => {
	return (
		<div className={className} onClick={() => scrollToBlock(blockId)}>
			{text}
		</div>
	)
}

export default AnchorBtn
