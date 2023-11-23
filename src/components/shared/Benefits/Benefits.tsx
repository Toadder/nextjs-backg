import { FC, use } from 'react'

import benefitsService from '@/services/benefits.service'

import styles from './Benefits.module.scss'
import BenefitsItem from './BenefitsItem'

const Benefits: FC = () => {
	const { error, benefitsData } = use(benefitsService.getData())

	if (error) {
		console.error(error)
		return
	}

	if (!benefitsData?.benefits?.length || benefitsData?.isbenefitshidden) return

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				{benefitsData?.benefits?.map(benefit => (
					<BenefitsItem key={benefit?.title} {...benefit} />
				))}
			</div>
		</div>
	)
}

export default Benefits
