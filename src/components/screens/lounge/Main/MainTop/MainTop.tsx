import { FC } from 'react';

import AnchorBtn from '@/components/ui/AnchorBtn/AnchorBtn';
import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import LazyVideo from '@/components/ui/LazyVideo/LazyVideo';

import styles from './MainTop.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const MainTop: FC = () => {
	return (
		<WithAnimation>
			<div className={styles.root}>
				<div className={styles.content}>
					<Heading type="h1" className={styles.title}>
						Зал <span className="text-orange">кухня</span>
					</Heading>
					<Description>
						<p>
							Просторный зал с функционирующей кухней. В вашем распоряжении:
							холодильник, духовка, индукционная плита, вытяжка, горячая и
							холодная вода, а также набор посуды, в который входит все самое
							необходимое: от столовых приборов, до кастрюль и винных бокалов.
						</p>
						<p>
							В кухонной зоне находится большой остров, на котором установлена
							индукционная плита и розетки. В столовой зоне расположен стол,
							стулья и окно со шторами.
						</p>
						<p>
							Зал выполнен в темных оттенках, с большим количеством стеновых
							фактурных рисунков, а также интересным световым решением.
						</p>
					</Description>
				</div>
				<div className={styles.media}>
					<LazyVideo videoMp4="/static/lounge/video.mp4" />
					<AnchorBtn
						selector="#booking"
						text="Забронировать"
						className={styles.btn}
					/>
				</div>
			</div>
		</WithAnimation>
	);
};

export default MainTop;
