import { FC } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import styles from './FooterContent.module.scss';
import { footerSocials } from './footer-content.data';

const FooterContent: FC = () => {
	return (
		<div className={styles.content}>
			<div className={styles.card}>
				<p className={styles.text}>
					Напишите нам в Whatsapp, Telegram или на почту и мы постараемся
					максимально быстро с вами связаться.
				</p>
				<div className={styles.socials}>
					{footerSocials.map((social) => (
						<a
							key={social.id}
							href={social.link}
							target="_blank"
							className={styles.social}
						>
							<FontAwesomeIcon name={social.icon} />
						</a>
					))}
				</div>
				<div className={styles.links}>
					<a href="" target="_blank" className={styles.link}>
						Решение о выпуске ЦФА от 26.04.2023
					</a>
					<a href="" target="_blank" className={styles.link}>
						Решение о выпуске ЦФА от 18.05.2023
					</a>
				</div>
			</div>
		</div>
	);
};

export default FooterContent;
