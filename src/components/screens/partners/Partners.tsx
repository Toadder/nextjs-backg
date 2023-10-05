import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';
import PopupBtn from '@/components/ui/PopupBtn/PopupBtn';

import styles from './Partners.module.scss';
import PartnersItem from './PartnersItem';
import { IPartners } from './partners.interface';

const Partners: FC<IPartners> = ({ title, partners }) => {
	if (!partners?.length) return;

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				{title?.length ? (
					<Heading className={styles.title} type="h1">
						{title}
					</Heading>
				) : null}

				<div className={styles.gridContainer}>
					{partners?.map((partner) => (
						<PartnersItem key={partner.id} {...partner} />
					))}
				</div>

				<PopupBtn popupName="becomePartner" className={styles.button}>
					Стать нашим партнёром
				</PopupBtn>
			</div>
		</section>
	);
};

export default Partners;
