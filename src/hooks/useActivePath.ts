import { usePathname } from 'next/navigation'

import { MenuItem } from '@/shared/types/grahpql.types'

type TPath = MenuItem['path']

export const useActivePath = () => {
	const pathname = usePathname()

	return (path: TPath): boolean => {
		if (!path?.length) return false
		return pathname.includes(path) || `${pathname}/`.includes(path)
	}
}
