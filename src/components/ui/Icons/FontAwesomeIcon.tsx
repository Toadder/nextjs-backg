import { FC } from 'react'

import {
	FontAwesomeIconName,
	fontAwesomeIcons
} from '@/shared/types/icon.types'

const FontAwesomeIcon: FC<{ name: FontAwesomeIconName }> = ({ name }) => {
	const IconComponent = fontAwesomeIcons[name]
	return <IconComponent /> || <></>
}

export default FontAwesomeIcon
