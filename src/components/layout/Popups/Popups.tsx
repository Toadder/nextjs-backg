import { FC } from 'react';

import Messenger from './Messenger/Messenger';
import { IPopups } from './popups.interface'

const Popups: FC<IPopups> = ({
	whatsapp, telegram
}) => (
	<>
		<Messenger whatsapp={whatsapp} telegram={telegram} />
	</>
);

export default Popups;
