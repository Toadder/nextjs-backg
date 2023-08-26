import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Journal.module.scss';
import { IJournalItem } from './journal.interface';
import { WithAnimation } from '@/hoc/WithAnimation';

const JournalItem: FC<IJournalItem> = ({ title, excerpt, link, image }) => {
	return (
		<WithAnimation>
			<article className={styles.item}>
				<Link href={link} className={styles.link}>
					<Image
						className={styles.image}
						src={image}
						fill
						sizes="calc(1200px / 3), (max-width: 64em) 50vw, (max-width: 48em) 100vw"
						alt=""
					/>
					<div className={styles.content}>
						<div className={styles.title}>{title}</div>
						<p className={styles.text}>{excerpt}</p>
					</div>
				</Link>
			</article>
		</WithAnimation>
	);
};

export default JournalItem;
