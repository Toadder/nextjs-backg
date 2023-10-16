import { FC } from 'react'

import { IArticleMain } from '../article.interface'

import styles from './Main.module.scss'
import MainContent from './MainContent/MainContent'
import MainSlider from './MainSlider/MainSlider'

const Main: FC<IArticleMain> = ({ title, date, slider, content }) => {
	return (
		<article className={styles.root}>
			<div className={styles.inner}>
				<MainSlider title={title} date={date} slider={slider} />
				<MainContent content={content} />
			</div>
		</article>
	)
}

export default Main
