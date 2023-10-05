import { FC } from 'react';

import AboutPartner from './AboutPartner/AboutPartner';
import BecomePartner from './BecomePartner/BecomePartner';
import Messenger from './Messenger/Messenger';
import { IPopups } from './popups.interface';

const Popups: FC<IPopups> = ({ whatsapp, telegram }) => (
	<>
		<Messenger whatsapp={whatsapp} telegram={telegram} />
		<AboutPartner />
		<BecomePartner />
	</>
);

export default Popups;
