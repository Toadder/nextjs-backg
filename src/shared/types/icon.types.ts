import {
	FaBoxOpen,
	FaCaretDown,
	FaCoffee,
	FaEnvelope,
	FaFan,
	FaInstagram,
	FaParking,
	FaPhoneAlt,
	FaRecycle,
	FaTelegram,
	FaVk,
	FaWhatsapp,
	FaChevronLeft,
	FaFire,
	FaTh,
	FaCheckCircle
} from 'react-icons/fa';
import { FaHandPointUp, FaLocationDot } from 'react-icons/fa6';

export const fontAwesomeIcons = {
	FaCaretDown,
	FaPhoneAlt,
	FaTelegram,
	FaWhatsapp,
	FaEnvelope,
	FaHandPointUp,
	FaParking,
	FaBoxOpen,
	FaFan,
	FaRecycle,
	FaCoffee,
	FaVk,
	FaInstagram,
	FaLocationDot,
	FaChevronLeft,
	FaFire,
	FaTh,
	FaCheckCircle
} as const;

export type FontAwesomeIconName = keyof typeof fontAwesomeIcons;
