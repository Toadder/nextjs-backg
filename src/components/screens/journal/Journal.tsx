'use client';

import { JournalContext } from 'context/JournalContext/JournalContext';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import Masonry from 'react-masonry-css';

import Spinner from '@/components/ui/Spinner/Spinner';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { generateRandomNumber } from '@/utils/data/generateRandomNumber';

import styles from './Journal.module.scss';
import JournalItem from './JournalItem';
import { ARTICLE_MAX_HEIGHT, ARTICLE_MIN_HEIGHT } from './journal.constants';
import { IJournal, IJournalData } from './journal.interface';
import { getData } from './journal.requests';

const Journal: FC<IJournal> = ({ items, hasNextPage, endCursor }) => {
	if (!items?.length) return;

	const { isJournalLoaded, loadJournal } = useContext(JournalContext);

	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {
		freezeOnceVisible: false,
		rootMargin: '50%'
	});
	const isVisible = Boolean(entry?.isIntersecting);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [articles, setArticles] = useState<IJournalData>(items);
	const [heights, setHeights] = useState<number[]>(
		articles.map(() =>
			generateRandomNumber(ARTICLE_MIN_HEIGHT, ARTICLE_MAX_HEIGHT)
		)
	);

	const [morePagesAvailable, setMorePagesAvailable] =
		useState<boolean>(hasNextPage);
	const [lastItemCursor, setLastItemCursor] = useState<string | null>(
		endCursor
	);

	useEffect(() => {
		if (!isJournalLoaded) loadJournal();
	}, []);

	useEffect(() => {
		if (isVisible && !isLoading) {
			setIsLoading(true);
			getData(lastItemCursor)
				.then((data) => {
					const { journalData, hasNextPage, endCursor } = data;
					const newHeights: number[] = journalData.map(() =>
						generateRandomNumber(ARTICLE_MIN_HEIGHT, ARTICLE_MAX_HEIGHT)
					);

					setHeights((prevData) => [...prevData, ...newHeights]);
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
				<Masonry
					style={{ opacity: Number(isJournalLoaded) }}
					breakpointCols={{
						default: 3,
						1024: 2,
						768: 1
					}}
					className={styles.masonryContainer}
					columnClassName={styles.masonryColumn}
				>
					{articles?.map(({ node }, index) => (
						<JournalItem
							masonryHeight={heights[index]}
							index={index}
							key={node?.id}
							title={node?.title}
							link={node?.uri}
							excerpt={node?.acfJournalData?.previewcontent}
							image={node?.acfJournalData?.previewimage}
						/>
					))}
				</Masonry>
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
