import { AiFillMessage } from 'react-icons/ai'
import {
	FaCaretDown,
	FaCheckCircle,
	FaChevronLeft,
	FaEnvelope,
	FaInstagram,
	FaPhoneAlt,
	FaTelegram,
	FaVk,
	FaWhatsapp,
	FaYoutube
} from 'react-icons/fa'
import {
	FaCalendar,
	FaHandPointUp,
	FaLocationDot,
	FaXmark
} from 'react-icons/fa6'

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
	AiFillMessage
} as const

export type FontAwesomeIconName = keyof typeof fontAwesomeIcons
