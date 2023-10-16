import { FC, use } from 'react'

import styles from './Objects.module.scss'
import ObjectItem from './ObjectsItem'
import { IObjectsQuery } from './objects.interface'
import objectsService from './objects.service'

const Objects: FC<IObjectsQuery> = ({ objectsQuery, page }) => {
	const { error, isObjectsHidden, objectsData } = use(
		objectsService.getData(objectsQuery, page)
	)

	if (error) {
		console.error(error)
		return
	}

	if (!objectsData?.length || isObjectsHidden) return

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				{objectsData?.map((object, i) => (
					<ObjectItem key={object?.id} index={i} {...object} />
				))}
			</div>
		</div>
	)
}

export default Objects
