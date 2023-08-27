import cn from 'clsx';
import { FC } from 'react';

import LoungeCard from '@/components/shared/LoungeCard/LoungeCard';

import styles from './Lounges.module.scss';
import { ILoungeItem } from './lounges.interface';
import { WithAnimation } from '@/hoc/WithAnimation';

const LoungesItem: FC<Omit<ILoungeItem, 'imageSizes'>> = ({
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
			<LoungeCard
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

export default LoungesItem;
