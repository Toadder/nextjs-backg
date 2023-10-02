'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, Suspense, useEffect } from 'react';

import { scrollToBlock } from '@/utils/window/scrollToBlock';

interface IAnchorScroll {
	paramName: string;
}

const AnchorScrollHandler: FC<IAnchorScroll> = ({ paramName }) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const blockId = searchParams.get(paramName);

	useEffect(() => {
		if (blockId?.length) {
			scrollToBlock(blockId);
			setTimeout(() => router.replace(pathname, { scroll: false }), 200);
		}
	}, []);

	return <></>;
};

const AnchorScroll: FC<IAnchorScroll> = ({ paramName }) => (
	<Suspense>
		<AnchorScrollHandler paramName={paramName} />
	</Suspense>
);

export default AnchorScroll;
