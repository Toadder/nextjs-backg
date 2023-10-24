'use client'

import { FC } from 'react'
import { useTimer } from 'react-timer-hook'

import { formatTimerUnits } from '@/utils/data/formatTimerUnits'

import styles from './Intro.module.scss'

const IntroTimer: FC<{ timestamp: Date }> = ({ timestamp }) => {
	const { minutes, hours, days } = useTimer({
		autoStart: true,
		expiryTimestamp: timestamp
	})

	const timerData = formatTimerUnits(days, hours, minutes)

	const isEnded: boolean = timestamp.getTime() - new Date().getTime() <= 0

	return (
		<div className={styles.outer}>
			<p className={styles.text}>осталось до мероприятия:</p>
			<div className={styles.timer}>
				{timerData.map(({ label, value }) => (
					<div className={styles.item} key={label}>
						<div className={styles.value}>{value}</div>
						<div className={styles.label}>{label}</div>
					</div>
				))}
			</div>
			{isEnded && <p className={styles.over}>Мероприятие прошло.</p>}
		</div>
	)
}

export default IntroTimer
