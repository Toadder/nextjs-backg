import { FC } from 'react';

import JournalCard from '@/components/shared/JournalCard/JournalCard';

import { IJournalItem } from './journal.interface';
import { WithAnimation } from '@/hoc/WithAnimation';

const JournalItem: FC<IJournalItem> = ({ title, excerpt, link, image }) => {
	return (
		<WithAnimation>
			<JournalCard
				title={title}
				excerpt={excerpt}
				link={link}
				image={image}
				imageSizes="calc(75rem / 3), (max-width: 64em) 50vw, (max-width: 48em) 100vw"
			/>
		</WithAnimation>
	);
};

export default JournalItem;
