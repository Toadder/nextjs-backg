import cn from 'clsx';
import { FC } from 'react';

import ObjectCard from '@/components/shared/ObjectCard/ObjectCard';

import styles from './Objects.module.scss';
import { IObjectItem } from './objects.interface';
import { WithAnimation } from '@/hoc/WithAnimation';

const ObjectItem: FC<IObjectItem> = ({
	index,
	image,
	title,
	excerpt,
	link,
	label
}) => {
	const isWide: boolean = (index + 1) % 5 === 0 || (index + 2) % 5 === 0;
	const desktopImageSizes: string = isWide
		? 'calc(75rem / 2)'
		: 'calc(75rem / 3)';
	const imageSizes = `(max-width: 48em) 100vw, (max-width: 64em) 50vw, ${desktopImageSizes}`;

	return (
		<WithAnimation
			className={cn(styles.wrapper, {
				[styles.wide]: isWide
			})}
		>
			<ObjectCard
				image={image}
				title={title}
				excerpt={excerpt}
				link={link}
				label={label}
				imageSizes={imageSizes}
			/>
		</WithAnimation>
	);
};

export default ObjectItem;
