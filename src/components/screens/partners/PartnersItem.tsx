'use client'

import { PartnerContext } from 'context/PartnerContext/PartnerContext'
import Image from 'next/image'
import { FC, useContext } from 'react'

import PopupBtn from '@/components/ui/PopupBtn/PopupBtn'

import styles from './Partners.module.scss'
import { IPartner } from './partners.interface'

const PartnersItem: FC<IPartner> = ({ content, image }) => {
	if (!image?.sourceUrl?.length || !content?.length) return

	const { setMessage } = useContext(PartnerContext)

	return (
		<div className={styles.wrapper} onClick={() => setMessage(content)}>
			<PopupBtn className={styles.item} popupName="aboutPartner">
				<Image
					className={styles.image}
					src={image?.sourceUrl}
					width={215}
					height={127}
					alt={image?.altText || ''}
					sizes="(max-width: 48em) 2.5rem, (max-width: 64em) 25vw, 13.4375rem"
					priority
				/>
			</PopupBtn>
		</div>
	)
}

export default PartnersItem
