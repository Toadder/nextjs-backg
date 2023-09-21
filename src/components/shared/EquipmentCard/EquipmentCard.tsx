import cn from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import Label from '@/components/ui/Label/Label';

import styles from './EquipmentCard.module.scss';
import { IAlignVariants, IEquipmentCard } from './equipment-card.interface';

const alignVariants: IAlignVariants = {
	verticalTop: 'items-start',
	verticalCenter: 'items-center',
	verticalBottom: 'items-end',

	horizontalLeft: 'text-left justify-start',
	horizontalCenter: 'text-center justify-center',
	horizontalRight: 'text-right justify-end'
};

const EquipmentCard: FC<IEquipmentCard> = ({
	title,
	content,
	image,
	contentAlignHorizontal,
	contentAlignVertical,
	label,
	imageSizes
}) => {
	const itemVerticalPosition: string =
		alignVariants[contentAlignVertical ?? 'verticalTop'];
	const itemHorizontalPosition: string =
		alignVariants[contentAlignHorizontal ?? 'horizontalLeft'];
	const itemPositionClass: string = `${itemVerticalPosition} ${itemHorizontalPosition}`;

	return (
		<div className={cn(styles.item, itemPositionClass)}>
			<Image
				src={image?.sourceUrl || ''}
				fill
				sizes={imageSizes}
				alt={image?.altText || ''}
				className={styles.image}
			/>
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				{content?.length ? (
					<p
						className={styles.text}
						dangerouslySetInnerHTML={{ __html: content }}
					>
						{}
					</p>
				) : null}
			</div>
			{label?.length ? <Label text={label} /> : null}
		</div>
	);
};

export default EquipmentCard;
