import Link from 'next/link';
import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';

import styles from './Booking.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const Booking: FC = () => {
	return (
		<WithAnimation>
			<section id="booking" className={styles.root}>
				<div className={styles.inner}>
					<Heading className="text-center">Бронирование</Heading>
					<p className={styles.text}>
						Чтобы рассчитать стоимость зала – воспользуйтесь виджетом
						бронирования. После выбора необходимых параметров вы увидите
						финальную цену и сможете оставить бронирование на выбранное время.
						Нажимая кнопку забронировать, вы соглашаетесь с{' '}
						<a href="" target="_blank">
							общими условиями аренды.
						</a>
					</p>
					<Link href="/" className={styles.link}>
						Условия аренды
					</Link>
				</div>
			</section>
		</WithAnimation>
	);
};

export default Booking;
