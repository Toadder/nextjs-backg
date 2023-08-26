import Link from 'next/link';
import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';

import styles from './Rates.module.scss';
import RatesItem from './RatesItem/RatesItem';
import { rates } from './rates.data';
import { WithAnimation } from '@/hoc/WithAnimation';

const Rates: FC = () => {
	return (
		<WithAnimation>
			<section className={styles.root}>
				<div className={styles.inner}>
					<Heading className={styles.title}>Бронирование</Heading>
					<p className={styles.text}>
						Бронирование павильона средняя циклорама возможно только по телефону
						или при личном посещении студии
					</p>
					<div className={styles.items}>
						{rates.map((rate) => (
							<RatesItem key={rate.title} {...rate} />
						))}
					</div>
					<div className={styles.btns}>
						<Link href="/" className={styles.link}>
							Условия аренды
						</Link>
						<a href="tel:74994554504" className={styles.link}>
							Забронировать
						</a>
					</div>
				</div>
			</section>
		</WithAnimation>
	);
};

export default Rates;
