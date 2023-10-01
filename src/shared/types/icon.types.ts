import {
	FaCaretDown,
	FaCheckCircle,
	FaChevronLeft,
	FaEnvelope,
	FaYoutube,
	FaInstagram,
	FaPhoneAlt,
	FaTelegram,
	FaVk,
	FaWhatsapp
} from 'react-icons/fa';
import { FaHandPointUp, FaLocationDot, FaCalendar, FaXmark } from 'react-icons/fa6';
import { SiMessenger } from 'react-icons/si';

export const fontAwesomeIcons = {
	FaCaretDown,
	FaPhoneAlt,
	FaTelegram,
	FaWhatsapp,
	FaEnvelope,
	FaHandPointUp,
	FaYoutube,
	FaVk,
	FaInstagram,
	FaLocationDot,
	FaChevronLeft,
	FaCheckCircle,
	FaCalendar,
	FaXmark,
	SiMessenger
} as const;

export type FontAwesomeIconName = keyof typeof fontAwesomeIcons;
