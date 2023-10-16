import { gql } from '@apollo/client'

export const GET_TELEGRAM_CONFIG = gql`
	query GET_TELEGRAM_CONFIG {
		config: generalSettings {
			acfSettings {
				telegramchatid
				senderbottoken
			}
		}
	}
`

export const GET_EMAIL_CONFIG = gql`
	query GET_EMAIL_CONFIG {
		config: generalSettings {
			acfSettings {
				emailforfeedback
			}
		}
	}
`
