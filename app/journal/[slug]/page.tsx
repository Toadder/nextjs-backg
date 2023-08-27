import { NextPage } from 'next';

export const dynamicParams = false;

export const generateStaticParams = () => {
	return [
		{
			slug: 'article'
		}
	];
};

const JournalArticlePage: NextPage = () => {
	return <div className="text-center section">Здесь будет страница статьи</div>;
};

export default JournalArticlePage;
