import { FC } from 'react'

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon'
import Label from '@/components/ui/Label/Label'

import { IPavilionRate } from '../../pavilion.interface'

import styles from './RatesItem.module.scss'

const RatesItem: FC<IPavilionRate> = ({
	name,
	time,
	price,
	unit,
	properties,
	content,
	label
}) => {
	return (
		<div className={styles.item}>
			<div className={styles.header}>
				{name?.length ? <div className={styles.title}>{name}</div> : null}
				{time?.length ? <div className={styles.time}>{time}</div> : null}
			</div>
			<div className={styles.content}>
				<div className={styles.main}>
					{price ? (
						<div className={styles.price}>
							<span>₽</span>
							<div>{price}</div>
						</div>
					) : null}
					{unit?.length ? <div className={styles.timeUnit}>{unit}</div> : null}
				</div>
				{properties?.length ? (
					<div className={styles.properties}>
						{properties?.map(propertyObj => (
							<div className={styles.property} key={propertyObj?.property}>
								<FontAwesomeIcon name="FaCheckCircle" />
								<div>{propertyObj?.property}</div>
							</div>
						))}
					</div>
				) : null}
				{content?.length ? <p className={styles.text}>{content}</p> : null}
			</div>
			{label ? <Label text={label} /> : null}
		</div>
	)
}

export default RatesItem
