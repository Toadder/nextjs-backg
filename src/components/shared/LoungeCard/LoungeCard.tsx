import { FC } from 'react';

import styles from './LoungeCard.module.scss';
import { ILoungeCard } from './lounge-card.interface'
import Image from 'next/image';
import Link from 'next/link';
import Label from '@/components/ui/Label/Label'

const LoungeCard: FC<ILoungeCard> = ({ link, title, image, imageSizes, excerpt, label }) => {
	return (
		<article className={styles.item}>
			<Link href={link} className={styles.link}>
				<Image
					src={image}
					fill
					sizes={imageSizes}
					alt=""
					className={styles.image}
				/>
				<div className={styles.content}>
					<div className={styles.title}>{title}</div>
					<p className={styles.text}>{excerpt}</p>
				</div>
				{label ? <Label text={label} /> : null}
			</Link>
		</article>
	);
};

export default LoungeCard;
