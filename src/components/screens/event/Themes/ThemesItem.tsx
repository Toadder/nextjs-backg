import { FC } from 'react'

import styles from './Themes.module.scss'
import { IEventThemesItem } from '../event.interface'

const ThemesItem: FC<IEventThemesItem> = ({
	time, 
	text
}) => {
	if(!text?.length) return

	return (
		<div className={styles.item}>
			{
				time?.length ? <div className={styles.time}>{time}</div> : null 
			}
			
			<div className={styles.text}>
				{text}
			</div>
		</div>
	)
}

export default ThemesItem
