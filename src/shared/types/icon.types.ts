import {
	FaCaretDown,
	FaCheckCircle,
	FaChevronLeft,
	FaEnvelope,
	FaInstagram,
	FaPhoneAlt,
	FaTelegram,
	FaVk,
	FaWhatsapp
} from 'react-icons/fa';
import { FaHandPointUp, FaLocationDot, FaCalendar } from 'react-icons/fa6';

export const fontAwesomeIcons = {
	FaCaretDown,
	FaPhoneAlt,
	FaTelegram,
	FaWhatsapp,
	FaEnvelope,
	FaHandPointUp,
	FaVk,
	FaInstagram,
	FaLocationDot,
	FaChevronLeft,
	FaCheckCircle,
	FaCalendar
} as const;

export type FontAwesomeIconName = keyof typeof fontAwesomeIcons;
