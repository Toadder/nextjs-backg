import { GeneralSettings_Acfsettings } from '@/shared/types/grahpql.types';

export type TCooperationDestination = 'email' | 'telegram';

export interface IBecomePartner {
	destination: TCooperationDestination;
	cooperationTypes: GeneralSettings_Acfsettings['cooperationtypes'];
}

export interface IBecomePartnerBody {
	type: string;
	company: string;
	site: string;
	name: string;
	phone: string;
	email: string;
	suggestion: string;
	file?: File;
	isAgree: string;
}

export interface IBecomePartnerInputs {
	cooperationType: string;
	companyName: string;
	siteUrl: string;
	name: string;
	phone: string;
	email: string;
	suggestion: string;
	file: FileList;
	agreement: boolean;
}

export enum SubmitStatus {
	Unsent, Pending, Error
}