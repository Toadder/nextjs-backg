import { FC } from 'react';

import Content from './Content/Content';
import styles from './Dressings.module.scss';
import Slider from './Slider/Slider';
import { IDressingsItem } from './dressings.interface';
import { WithAnimation } from '@/hoc/WithAnimation';

const DressingsItem: FC<IDressingsItem> = ({
	id,
	slug,
	title,
	content,
	slider
}) => {
	return (
		<WithAnimation>
			<div className={styles.item} id={slug || ''}>
				<div className={styles.inner}>
					<Content title={title} content={content} />
					<Slider id={id} slider={slider} />
				</div>
			</div>
		</WithAnimation>
	);
};

export default DressingsItem;
