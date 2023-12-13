import Image from 'next/image'
import { FC } from 'react'
import Marquee from 'react-fast-marquee'

import styles from './Announcement.module.scss'

const Announcement: FC = () => {
	return (
		<a
			href="https://t.me/backg_chat"
			target="_blank"
			className={styles.announcement}
		>
			<Marquee autoFill speed={140}>
				<Image
					className={styles.img}
					src="/static/announce/bg.jpg"
					height={156}
					width={278}
					sizes="(max-width: 48em) 10.7rem, (max-width: 64em) 14.25rem, (max-width: 80em) 16rem, 17.375rem"
					priority
					alt=""
				/>
			</Marquee>
		</a>
	)
}

export default Announcement
