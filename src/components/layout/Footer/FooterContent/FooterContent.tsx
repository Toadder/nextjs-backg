import { FC } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import { IFooterContent } from '../footer.interface';

import styles from './FooterContent.module.scss';

const FooterContent: FC<IFooterContent> = ({
	text,
	telegram,
	whatsapp,
	email,
	documents
}) => {
	const isSocialsExist: boolean =
		!!telegram?.length || !!whatsapp?.length || !!email?.length;

	return (
		<div className={styles.content}>
			<div className={styles.card}>
				{/* Text */}
				{text?.length ? <p className={styles.text}>{text}</p> : null}

				{/* Socials */}
				{isSocialsExist && (
					<div className={styles.socials}>
						{telegram?.length ? (
							<a href={telegram} target="_blank" className={styles.social}>
								<FontAwesomeIcon name="FaTelegram" />
							</a>
						) : null}
						{whatsapp?.length ? (
							<a href={whatsapp} target="_blank" className={styles.social}>
								<FontAwesomeIcon name="FaWhatsapp" />
							</a>
						) : null}
						{email?.length ? (
							<a
								href={`mailto:${email}`}
								target="_blank"
								className={styles.social}
							>
								<FontAwesomeIcon name="FaEnvelope" />
							</a>
						) : null}
					</div>
				)}

				{/* Documents */}
				{documents?.length ? (
					<div className={styles.links}>
						{documents?.map((documentObj) => (
							<a
								key={documentObj?.documentname}
								href={documentObj?.documentfile?.mediaItemUrl || ''}
								target="_blank"
								className={styles.link}
							>
								{documentObj?.documentname}
							</a>
						))}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default FooterContent;
