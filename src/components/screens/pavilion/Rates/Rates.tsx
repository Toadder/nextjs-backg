import Link from 'next/link';
import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';

import { convertPhone } from '@/utils/data/convertPhone';

import { IPavilionRates } from '../pavilion.interface';

import styles from './Rates.module.scss';
import RatesItem from './RatesItem/RatesItem';
import { pagesUri } from '@/constants/pages';
import { WithAnimation } from '@/hoc/WithAnimation';

const Rates: FC<IPavilionRates> = ({ isBlockHidden, title, content, rates, phone }) => {
	if (!rates?.length || isBlockHidden) return;

	return (
		<WithAnimation>
			<section className={styles.root}>
				<div className={styles.inner}>
					{title?.length ? (
						<Heading className={styles.title}>Бронирование</Heading>
					) : null}

					{content?.length ? (
						<p className={styles.text}>
							Бронирование павильона средняя циклорама возможно только по
							телефону или при личном посещении студии
						</p>
					) : null}
					<div className={styles.items}>
						{rates?.map((rate) => <RatesItem key={rate?.name} {...rate} />)}
					</div>
					<div className={styles.btns}>
						<Link href={pagesUri.conditions} className={styles.link}>
							Условия аренды
						</Link>
						{phone?.length ? (
							<a href={`tel:${convertPhone(phone)}`} className={styles.link}>
								Забронировать
							</a>
						) : null}
					</div>
				</div>
			</section>
		</WithAnimation>
	);
};

export default Rates;
