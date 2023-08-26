import { usePathname } from 'next/navigation';

interface INavItem {
	path: string;
	[key: string]: any;
}

export const useActivePath = () => {
	const pathname = usePathname();

	return (path: string, items?: INavItem[]): boolean => {
		if (items?.length) {
			return Boolean(items?.find((item) => item.path === pathname));
		}

		if (path.endsWith('#')) {
			return false;
		}

		return path === pathname;
	};
};
