import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Label from '@/components/ui/Label/Label';

import styles from './ObjectCard.module.scss';
import { IObjectCard } from './object-card.interface';

const ObjectCard: FC<IObjectCard> = ({
	link,
	title,
	image,
	imageSizes,
	excerpt,
	label
}) => {
	return (
		<article className={styles.item}>
			<Link href={link || ''} className={styles.link}>
				{image?.sourceUrl?.length ? (
					<Image
						src={image?.sourceUrl}
						fill
						sizes={imageSizes}
						alt={image?.altText || ''}
						className={styles.image}
					/>
				) : null}
				<div className={styles.content}>
					{title?.length ? <div className={styles.title}>{title}</div> : null}
					{excerpt?.length ? <p className={styles.text}>{excerpt}</p> : null}
				</div>
				{label ? <Label text={label} /> : null}
			</Link>
		</article>
	);
};

export default ObjectCard;
