import { FC } from 'react'

import AnchorScroll from '@/components/ui/AnchorScroll/AnchorScroll'

import styles from './Dressings.module.scss'
import DressingsItem from './DressingsItem'
import { IDressings } from './dressings.interface'

const Dressings: FC<IDressings> = ({ items }) => {
	if (!items?.length) return

	return (
		<>
			<AnchorScroll paramName="dressing" />
			<div className={styles.root}>
				{items?.map(item => <DressingsItem key={item?.id} {...item} />)}
			</div>
		</>
	)
}

export default Dressings
