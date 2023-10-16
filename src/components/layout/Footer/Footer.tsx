import { FC } from 'react'

import styles from './Footer.module.scss'
import FooterContent from './FooterContent/FooterContent'
import FooterMap from './FooterMap/FooterMap'
import { IFooterData } from './footer.interface'

const Footer: FC<{ data: IFooterData }> = ({ data }) => {
	if (!data?.mapcoordinates?.length) return

	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<FooterContent
					text={data?.footertext}
					telegram={data?.telegram}
					whatsapp={data?.whatsapp}
					email={data?.email}
					documents={data?.documents}
				/>
				<FooterMap address={data?.address} coordinates={data?.mapcoordinates} />
			</div>
		</footer>
	)
}

export default Footer
