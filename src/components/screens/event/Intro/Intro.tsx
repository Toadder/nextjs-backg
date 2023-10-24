'use client'

import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import { IEventIntro } from '../event.interface'

import styles from './Intro.module.scss'
import IntroTimer from './IntroTimer'
import IntroVideo from './IntroVideo'

const Intro: FC<IEventIntro> = ({
	isBlockHidden,
	title,
	subtitle,
	dateTime,
	city,
	videoId
}) => {
	if (isBlockHidden || !dateTime?.length) return

	const targetDate: Date = new Date(dateTime)

	const hours: string = targetDate.getHours().toString().padStart(2, '0')
	const minutes: string = targetDate.getMinutes().toString().padStart(2, '0')
	const day: string = targetDate.getDate().toString().padStart(2, '0')
	const month: string = (targetDate.getMonth() + 1).toString().padStart(2, '0')
	const year: string = targetDate.getFullYear().toString()

	const targetTimeString: string = `${hours}:${minutes} | ${day}.${month}.${year}`
	const targetInfo: string = city?.length
		? `${targetTimeString}, ${city}`
		: targetTimeString

	return (
		<section className={styles.root}>
			<IntroVideo videoId={videoId || ''} />
			<div className={styles.inner}>
				{title?.length ? (
					<Heading className={styles.title} type="h1">
						{title}
					</Heading>
				) : null}
				{subtitle?.length ? (
					<div className={styles.subtitle}>{subtitle}</div>
				) : null}

				<div className={styles.info}>{targetInfo}</div>
				<IntroTimer timestamp={targetDate} />
			</div>
		</section>
	)
}

export default Intro
