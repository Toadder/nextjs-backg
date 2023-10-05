'use client';

import { PartnerContext } from 'context/PartnerContext/PartnerContext';
import { FC, useContext } from 'react';

import PopupCard from '@/components/ui/PopupCard/PopupCard';

import styles from './AboutPartner.module.scss';

const AboutPartner: FC = () => {
	const { message } = useContext(PartnerContext);

	return (
		<PopupCard currentPopup="aboutPartner" className={styles.root}>
			{message}
		</PopupCard>
	);
};

export default AboutPartner;
