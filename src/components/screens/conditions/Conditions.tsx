import { FC, use } from 'react'

import styles from './Conditions.module.scss'
import conditionsService from './conditions.service'

const Conditions: FC = () => {
	const { error, generalSettings, conditionsData } = use(
		conditionsService.getData()
	)

	if (error) {
		console.error(error)
		return
	}

	if (!conditionsData?.content?.length) return

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: conditionsData?.content || '' }}
				/>
				{generalSettings?.bookingfile?.mediaItemUrl?.length ? (
					<a
						className={styles.btn}
						target="_blank"
						href={generalSettings?.bookingfile?.mediaItemUrl}
					>
						Полные условия
					</a>
				) : null}
			</div>
		</div>
	)
}

export default Conditions
