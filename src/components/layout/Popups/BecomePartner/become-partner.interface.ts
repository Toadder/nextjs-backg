import { GeneralSettings_Acfsettings as AcfSettings } from '@/shared/types/grahpql.types'

export type TCooperationDestination = 'email' | 'telegram'

export enum SubmitStatus {
	Unsent,
	Pending,
	Error
}

export interface IBecomePartner {
	destination: TCooperationDestination
	cooperationTypes: AcfSettings['cooperationtypes']
}

export interface IBecomePartnerBody {
	type: string
	company: string
	site: string
	name: string
	phone: string
	email: string
	suggestion: string
	isAgree: string
	file?: File
}

export interface IBecomePartnerInputs {
	cooperationType: string
	companyName: string
	siteUrl: string
	name: string
	phone: string
	email: string
	suggestion: string
	file: FileList
	agreement: boolean
}
