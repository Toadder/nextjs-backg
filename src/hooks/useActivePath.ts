import { usePathname } from 'next/navigation';

import { IMenuNodes } from '@/components/layout/Header/header.interface';

import { MenuItem } from '@/shared/types/grahpql.types';

export const useActivePath = () => {
	const pathname = usePathname();

	return (path: MenuItem['path'], childItems?: IMenuNodes[]): boolean => {
		if (childItems?.length) {
			return Boolean(
				childItems?.find(
					({ node }) => node?.path === `${pathname}/` || node?.path === pathname
				)
			);
		}

		if (path?.endsWith('#')) {
			return false;
		}

		return path === `${pathname}/` || path === pathname;
	};
};
