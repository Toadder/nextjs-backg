import { FC } from 'react'
import YouTube from 'react-youtube'

import styles from './Intro.module.scss'

const IntroVideo: FC<{ videoId: string }> = ({ videoId }) => {
	if(!videoId?.length) return

	return (
		<div className={styles.videoBackground}>
			<div className={styles.videoForeground}>
				<YouTube
					videoId={videoId}
					opts={{
						playerVars: {
							autoplay: 1,
							controls: 0,
							rel: 0,
							showinfo: 0,
							mute: 1,
							playsinline: 1
						}
					}}
					onEnd={event => event.target.playVideo()}
				/>
			</div>
		</div>
	)
}

export default IntroVideo
