import { usePathname } from 'next/navigation';

import { MenuItem } from '@/shared/types/grahpql.types';

export const useActivePath = () => {
	const pathname = usePathname();

	return (path: MenuItem['path']): boolean => {
		if (!path?.length) return false;
		return pathname.includes(path) || `${pathname}/`.includes(path);
	};
};
