import { FC } from 'react'

import styles from './Main.module.scss';
import MainSlider from './MainSlider/MainSlider'
import { IArticleMain } from '../article.interface'
import MainContent from './MainContent/MainContent'

const Main: FC<IArticleMain> = ({
	title, date, slider, content
}) => {
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