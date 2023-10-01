'use client';

import { FC, useEffect, useRef, useState } from 'react';

import Spinner from '@/components/ui/Spinner/Spinner';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import styles from './Journal.module.scss';
import JournalItem from './JournalItem';
import { IJournal, IJournalData } from './journal.interface';
import { getData } from './journal.requests';

const Journal: FC<IJournal> = ({ items, hasNextPage, endCursor }) => {
	if (!items?.length) return;

	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {
		freezeOnceVisible: false,
		rootMargin: '50%'
	});
	const isVisible = Boolean(entry?.isIntersecting);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [articles, setArticles] = useState<IJournalData>(items);
	const [morePagesAvailable, setMorePagesAvailable] =
		useState<boolean>(hasNextPage);
	const [lastItemCursor, setLastItemCursor] = useState<string | null>(
		endCursor
	);

	useEffect(() => {
		if (isVisible && !isLoading) {
			setIsLoading(true);
			getData(lastItemCursor)
				.then((data) => {
					const { journalData, hasNextPage, endCursor } = data;
					setArticles((prevData) => [...prevData, ...journalData]);
					setMorePagesAvailable(hasNextPage);
					setLastItemCursor(endCursor);
				})
				.catch((error) => {
					console.error(error);
					setMorePagesAvailable(false);
					alert('При загрузке данных произошла ошибка...');
				})
				.finally(() => setIsLoading(false));
		}
	}, [isVisible]);

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<div className={styles.gridContainer}>
					{articles?.map(({ node }) => (
						<JournalItem
							key={node?.id}
							title={node?.title}
							link={node?.uri}
							excerpt={node?.acfJournalData?.previewcontent}
							image={node?.acfJournalData?.previewimage}
						/>
					))}
				</div>
				{morePagesAvailable && (
					<div className={styles.spinnerContainer} ref={ref}>
						<Spinner />
					</div>
				)}
			</div>
		</div>
	);
};

export default Journal;
