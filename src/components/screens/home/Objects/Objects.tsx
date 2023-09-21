import { FC, use } from 'react';

import { IObject } from '@/components/shared/ObjectCard/object-card.interface';

import { Dressing, Lounge, Pavilion } from '@/shared/types/grahpql.types';

import { parseToObjectType } from '@/utils/data/parseToObjectType';

import client from '@/config/apollo/client';
import { GET_OBJECTS_DATA } from '@/config/apollo/queries/get-objects-data';

import styles from './Objects.module.scss';
import ObjectItem from './ObjectsItem';
import { IObjectsData } from './objects.interface';

const getData = async () => {
	const { error, data } = await client.query({ query: GET_OBJECTS_DATA });

	const lounges: IObject[] = data?.lounges?.edges?.map(
		({ node }: { node: Lounge }) => parseToObjectType(node)
	);

	const pavilions: IObject[] = data?.pavilions?.edges?.map(
		({ node }: { node: Pavilion }) => parseToObjectType(node)
	);

	const dressings: IObject[] = data?.dressings?.edges?.map(
		({ node }: { node: Dressing }) => parseToObjectType(node)
	);

	const objectsData: IObjectsData = [...lounges, ...pavilions, ...dressings];

	return { error, objectsData };
};

const Objects: FC = () => {
	const { error, objectsData } = use(getData());

	if (error) {
		console.log(error);
		return;
	}

	if (!objectsData?.length) return;

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
