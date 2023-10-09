import { FieldError, RefCallBack } from 'react-hook-form'

export interface IOption {
	label: string;
	value: any;
}

export interface ISelect {
	options: IOption[];
	value: any;
	setValue: (...event: any[]) => void;
	error?: FieldError
	placeholder?: string;
	isClearable?: boolean;
}
