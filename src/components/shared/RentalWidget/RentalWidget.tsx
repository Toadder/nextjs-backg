'use client'

import { FC, useRef } from 'react'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import styles from './RentalWidget.module.scss'
import {
	IRentalWidget,
	IRentalWidgetIframeStyles
} from './rental-widget.interface'

const RentalWidget: FC<IRentalWidget> = ({
	isBlockHidden,
	iframeSrc,
	iframeClass,
	iframeStyles
}) => {
	if (
		!iframeSrc?.length ||
		!iframeClass?.length ||
		!iframeStyles?.length ||
		isBlockHidden
	)
		return

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {})
	const isVisible = Boolean(entry?.isIntersecting)
	const iframeStylesObj: IRentalWidgetIframeStyles = JSON.parse(iframeStyles)

	return (
		<div
			className={styles.root}
			ref={ref}
			style={{
				height: iframeStylesObj?.height
			}}
		>
			{isVisible && (
				<iframe
					className={iframeClass}
					src={iframeSrc}
					style={iframeStylesObj}
				/>
			)}
		</div>
	)
}

export default RentalWidget
