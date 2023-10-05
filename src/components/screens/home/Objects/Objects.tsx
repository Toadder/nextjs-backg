import { DocumentNode } from 'graphql';
import { FC, use } from 'react';

import { IObject } from '@/components/shared/ObjectCard/object-card.interface';

import { Dressing, Lounge, Pavilion } from '@/shared/types/grahpql.types';

import { compareByPriority } from '@/utils/data/compareByPriority';
import { parseToObjectType } from '@/utils/data/parseToObjectType';

import client from '@/config/apollo/client';

import styles from './Objects.module.scss';
import ObjectItem from './ObjectsItem';
import { IObjectsData, IObjectsQuery, TPages } from './objects.interface';

const getData = async (query: DocumentNode, page: TPages) => {
	const { error, data } = await client.query({ query });

	const isObjectsHidden: boolean = data?.fields?.acfPageFields?.isobjectshidden;

	const lounges: IObject[] =
		data?.lounges?.edges?.map(({ node }: { node: Lounge }) =>
			parseToObjectType(node)
		) || [];

	const pavilions: IObject[] =
		data?.pavilions?.edges?.map(({ node }: { node: Pavilion }) =>
			parseToObjectType(node)
		) || [];

	const dressings: IObject[] =
		data?.dressings?.edges?.map(({ node }: { node: Dressing }) =>
			parseToObjectType(node)
		) || [];

	const objectsData: IObjectsData = [...lounges, ...pavilions, ...dressings]
		.filter((obj) => !obj.hiddenOn?.includes(page))
		.sort(compareByPriority);

	return { error, isObjectsHidden, objectsData };
};

const Objects: FC<IObjectsQuery> = ({ objectsQuery, page }) => {
	const { error, isObjectsHidden, objectsData } = use(
		getData(objectsQuery, page)
	);

	if (error) {
		console.error(error);
		return;
	}

	if (!objectsData?.length || isObjectsHidden) return;

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				{objectsData?.map((object, i) => (
					<ObjectItem key={object?.id} index={i} {...object} />
				))}
			</div>
		</div>
	);
};

export default Objects;
