'use client';

import { FC, useEffect } from 'react';

import {
	initGTMScriptOnEvent,
	initGTMScriptWithDelay
} from '@/utils/analytics/gtm';
import {
	initYMScriptOnEvent,
	initYMScriptWithDelay
} from '@/utils/analytics/ym';

export const AnalyticLoader: FC = () => {
	useEffect(() => {
		const GTMTimer = initGTMScriptWithDelay();
		document.addEventListener('scroll', initGTMScriptOnEvent);
		document.addEventListener('mousemove', initGTMScriptOnEvent);
		document.addEventListener('touchstart', initGTMScriptOnEvent);

		const YMTimer = initYMScriptWithDelay();
		document.addEventListener('scroll', initYMScriptOnEvent);
		document.addEventListener('mousemove', initYMScriptOnEvent);
		document.addEventListener('touchstart', initYMScriptOnEvent);

		return () => {
			clearTimeout(GTMTimer);
			document.removeEventListener('scroll', initGTMScriptOnEvent);
			document.removeEventListener('mousemove', initGTMScriptOnEvent);
			document.removeEventListener('touchstart', initGTMScriptOnEvent);

			clearTimeout(YMTimer);
			document.removeEventListener('scroll', initYMScriptOnEvent);
			document.removeEventListener('mousemove', initYMScriptOnEvent);
			document.removeEventListener('touchstart', initYMScriptOnEvent);
		};
	}, []);

	return (
		<>
			<noscript>
				<div>
					<img
						src={`https://mc.yandex.ru/watch/${process.env.YM_ID}`}
						style={{ position: 'absolute', left: -9999 }}
						alt=""
					/>
				</div>
			</noscript>
		</>
	);
};

export default AnalyticLoader;
