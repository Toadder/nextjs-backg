import { FC } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import Label from '@/components/ui/Label/Label';

import { IRateItem } from '../rates.interface';

import styles from './RatesItem.module.scss';

const RatesItem: FC<IRateItem> = ({
	title,
	time,
	price,
	timeUnit,
	properties,
	text,
	label
}) => {
	return (
		<div className={styles.item}>
			<div className={styles.header}>
				<div className={styles.title}>{title}</div>
				<div className={styles.time}>{time}</div>
			</div>
			<div className={styles.content}>
				<div className={styles.main}>
					<div className={styles.price}>
						<span>₽</span>
						<div>{price}</div>
					</div>
					<div className={styles.timeUnit}>{timeUnit}</div>
				</div>
				<div className={styles.properties}>
					{properties.map((property) => (
						<div className={styles.property} key={property}>
							<FontAwesomeIcon name="FaCheckCircle" />
							<div>{property}</div>
						</div>
					))}
				</div>
				<p className={styles.text}>{text}</p>
			</div>
			{label ? <Label text={label} /> : null}
		</div>
	);
};

export default RatesItem;
