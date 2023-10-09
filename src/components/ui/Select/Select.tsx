import { forwardRef } from 'react'
import ReactSelect from 'react-select'

import { IOption, ISelect } from './select.interface'
import './select.scss'

const Select = forwardRef<any, ISelect>(
	({ options, value: value, setValue, error, ...rest }, ref) => {
		if(!options?.length) return;

		const hasError: boolean = !!error?.type?.length;

		const getValue = () =>
			value ? options.find((item) => item.value === value) : value;

		const changeHandler = (option: IOption): void => {
			setValue(option ? option.value : option);
		};

		return (
			<ReactSelect
				classNamePrefix='primary-select'
				className={hasError ? 'primary-select-with-error' : undefined}
				options={options}
				value={getValue()}
				isSearchable={false}
				onChange={changeHandler}
				ref={ref}
				{...rest}
			/>
		);
	}
);

export default Select;
