import { ReactNode } from 'react'

export interface IHeading {
	children?: ReactNode
	htmlContent?: string
	type?: 'h1' | 'h2'
	className?: string
}
