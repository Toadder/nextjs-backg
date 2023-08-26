import Image from 'next/image';
import { FC } from 'react';

import Description from '@/components/ui/Description/Description';
import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer';

import styles from './MainBottom.module.scss';
import MainContentProperty from './MainProperty';
import { WithAnimation } from '@/hoc/WithAnimation';

const MainBottom: FC = () => {
	return (
		<WithAnimation>
			<div className={styles.root}>
				<FancyboxContainer className={styles.media}>
					<a
						className={styles.link}
						href="/static/lounge/plan.webp"
						data-fancybox="MainContentPlan"
					>
						<Image
							src="/static/lounge/plan.webp"
							width={520}
							height={0}
							sizes="(max-width: 32.5em) 100vw, 520px"
							alt=""
						/>
					</a>
				</FancyboxContainer>
				<div className={styles.info}>
					<Description>
						<p>
							Потолки белые – 3 метра. Для комфортной работы в зале работает
							кондиционер.
						</p>
						<p>
							Вы можете воспользоваться услугами нашего клининга, если после
							приготовления пищи осталось много грязной посуды, данная услуга
							стоит – 2000 рублей. В наш зал вы можете привезти любой декор,
							фон, или же световое оборудование, без наценки с нашей стороны.
						</p>
						<p>
							В стоимость зала включено два источника импульсного света Godox.
						</p>
						<p>
							**Звоните админу для уточнения наличия источников, а также
							насадок.
						</p>
					</Description>
					<div className={styles.properties}>
						<MainContentProperty
							icon="FaFire"
							title="Кухня"
							excerpt="Полностью функциональная кухня"
							text="Главное достоинство этого зала, также вам не нужно везти с собой посуду, ведь у нас есть все что нужно для проведения съемок"
						/>
						<MainContentProperty
							icon="FaTh"
							title="Зоны"
							excerpt="Разделенные зоны в зале"
							text="Зона столовой отлично подходит не только для кулинарных шоу, но и для съемок интервью, и любых других развлекательных шоу "
						/>
					</div>
				</div>
			</div>
		</WithAnimation>
	);
};

export default MainBottom;
