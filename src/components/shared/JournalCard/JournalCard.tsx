import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './JournalCard.module.scss';
import { IJournalCard } from './journal-card.interface';

const JournalCard: FC<IJournalCard> = ({
	title,
	image,
	excerpt,
	link,
	imageSizes,
	size = 'big'
}) => {
	return (
		<article
			className={cn(styles.item, {
				[styles.smallItem]: size === 'small'
			})}
		>
			<Link href={link || ''} className={styles.link}>
				<Image
					className={styles.image}
					src={image?.sourceUrl || ''}
					fill
					sizes={imageSizes}
					alt={image?.altText || ''}
				/>
				<div className={styles.content}>
					{title?.length ? <div className={styles.title}>{title}</div> : null}
					{excerpt?.length ? <p className={styles.text}>{excerpt}</p> : null}
				</div>
			</Link>
		</article>
	);
};

export default JournalCard;
