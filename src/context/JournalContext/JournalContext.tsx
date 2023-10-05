'use client';

import { usePathname } from 'next/navigation';
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react';

import { IJournalContext } from './journal-context.interface';
import { pagesUri } from '@/constants/pages';

const DEFAULT_JOURNAL_CONTEXT: IJournalContext = {
	isJournalLoaded: false,
	loadJournal: () => {}
};

export const JournalContext = createContext<IJournalContext>(
	DEFAULT_JOURNAL_CONTEXT
);

export const JournalProvider: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname();
	const [isJournalLoaded, setIsJournalLoaded] = useState<boolean>(false);

	const loadJournal = () => setIsJournalLoaded(true);

	useEffect(() => {
		if (pathname !== pagesUri.journal) loadJournal();
	}, []);

	return (
		<JournalContext.Provider
			value={{
				isJournalLoaded,
				loadJournal
			}}
		>
			{children}
		</JournalContext.Provider>
	);
};
