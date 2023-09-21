import { FC } from 'react';

import Spinner from '../Spinner/Spinner';

const PageLoader: FC = () => {
	return (
		<div className="page-loader">
			<Spinner />
		</div>
	);
};

export default PageLoader;
