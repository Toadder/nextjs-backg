import { FC } from 'react';

import JournalCard from '@/components/shared/JournalCard/JournalCard';

import { IJournalItem } from './journal.interface';

const JournalItem: FC<IJournalItem> = ({ index, title, excerpt, link, image }) => {
	return (
		<JournalCard
			title={title}
			excerpt={excerpt}
			link={link}
			image={image}
			imageSizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, 25rem"
			isImagePreloaded={index < 6}
		/>
	);
};

export default JournalItem;
