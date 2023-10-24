import Image from 'next/image'
import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import { IEventThemes } from '../event.interface'

import styles from './Themes.module.scss'
import ThemesItem from './ThemesItem'

const Themes: FC<IEventThemes> = ({
	isBlockHidden,
	title,
	items,
	eventWidget
}) => {
	if (isBlockHidden || !items?.length) return

	return (
		<section className={styles.root}>
			<Image
				className={styles.bg}
				src="/static/event/theme-bg.png"
				alt=""
				fill
			/>
			<div className={styles.inner}>
				{title?.length ? (
					<Heading className={styles.title}>{title}</Heading>
				) : null}

				<div className={styles.themes}>
					{items?.map(item => (
						<ThemesItem
							key={item?.content}
							time={item?.time}
							text={item?.content}
						/>
					))}
				</div>
				{eventWidget?.length ? (
					<a className={styles.btn} href={eventWidget} target="_blank">
						{' '}
						Получить билет
					</a>
				) : null}
			</div>
		</section>
	)
}

export default Themes
