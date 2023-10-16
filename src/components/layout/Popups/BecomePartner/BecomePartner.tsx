'use client'

import axios from 'axios'
import cn from 'clsx'
import { PopupContext } from 'context/PopupContext/PopupContext'
import { ChangeEvent, FC, useContext, useState } from 'react'
import { SubmitHandler, useController, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon'
import PopupCard from '@/components/ui/PopupCard/PopupCard'
import Select from '@/components/ui/Select/Select'
import { IOption } from '@/components/ui/Select/select.interface'
import Spinner from '@/components/ui/Spinner/Spinner'

import { parseToFormData } from '@/utils/data/parseToFormData'
import {
	validateFileExtension,
	validateFileSize
} from '@/utils/validations/fileValidation'
import { isEmpty } from '@/utils/validations/isEmpty'
import {
	emailPattern,
	phonePattern,
	urlPattern
} from '@/utils/validations/regex'

import styles from './BecomePartner.module.scss'
import {
	IBecomePartner,
	IBecomePartnerBody,
	IBecomePartnerInputs,
	SubmitStatus
} from './become-partner.interface'

const BecomePartner: FC<IBecomePartner> = ({
	cooperationTypes,
	destination
}) => {
	const { setActivePopup } = useContext(PopupContext)

	const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(
		SubmitStatus.Unsent
	)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [fileName, setFileName] = useState<string>('')

	const { register, handleSubmit, formState, reset, control } =
		useForm<IBecomePartnerInputs>({
			defaultValues: {
				cooperationType: '',
				phone: ''
			},
			shouldFocusError: false
		})

	// Controlled Select
	const { field: cooperationField } = useController({
		name: 'cooperationType',
		control,
		rules: { required: true }
	})
	const {
		value: cooperationValue,
		onChange: onCooperationChange,
		...restCooperationFields
	} = cooperationField

	const { errors } = formState

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) setFileName(e.target.files[0].name)
	}

	const onSubmit: SubmitHandler<IBecomePartnerInputs> = async formData => {
		setSubmitStatus(SubmitStatus.Pending)

		const body: IBecomePartnerBody = {
			type: formData.cooperationType.trim(),
			company: formData.companyName.trim(),
			site: formData.siteUrl.trim(),
			name: formData.name.trim(),
			phone: formData.phone.trim(),
			email: formData.email.trim(),
			suggestion: formData.suggestion.trim(),
			isAgree: formData.agreement ? 'on' : '',
			...(formData.file.length
				? {
						file: formData.file[0]
				  }
				: {})
		}

		try {
			await axios.post(`/api/${destination}/cooperation`, parseToFormData(body))

			setActivePopup('greeting')

			setSubmitStatus(SubmitStatus.Unsent)
			setFileName('')
			reset()
		} catch (error: any) {
			console.error(error)
			setSubmitStatus(SubmitStatus.Error)

			if (error.response) setErrorMessage(error.response.data.message)
			else setErrorMessage('При отправке формы произошла ошибка.')

			setTimeout(() => setSubmitStatus(SubmitStatus.Unsent), 4000)
		}
	}

	return (
		<PopupCard currentPopup="becomePartner" className={styles.root}>
			<div className={styles.title}>Заявка на сотрудничество</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Select
					value={cooperationValue}
					setValue={onCooperationChange}
					options={cooperationTypes as IOption[]}
					placeholder="Тип сотрудничества*"
					error={errors?.cooperationType}
					{...restCooperationFields}
				/>

				<div
					className={cn(styles.field, {
						[styles.error]: !!errors?.companyName?.type
					})}
				>
					<input
						{...register('companyName', {
							required: true,
							validate: { empty: isEmpty }
						})}
						name="companyName"
						placeholder="Название компании*"
						type="text"
						autoComplete="off"
					/>
				</div>

				<div
					className={cn(styles.field, {
						[styles.error]: !!errors?.siteUrl?.type
					})}
				>
					<input
						{...register('siteUrl', {
							required: true,
							pattern: urlPattern
						})}
						name="siteUrl"
						placeholder="Адрес сайта*"
						type="text"
						autoComplete="off"
					/>
				</div>

				<div
					className={cn(styles.field, {
						[styles.error]: !!errors?.name?.type
					})}
				>
					<input
						{...register('name', {
							required: true,
							validate: { empty: isEmpty }
						})}
						name="name"
						placeholder="ФИО*"
						type="text"
						autoComplete="off"
					/>
				</div>

				<div
					className={cn(styles.field, {
						[styles.error]: !!errors?.phone?.type
					})}
				>
					<InputMask
						{...register('phone', {
							required: true,
							pattern: phonePattern
						})}
						mask="+7 (999) 999-99-99"
						alwaysShowMask={false}
						type="text"
						placeholder="Номер телефона*"
						name="phone"
						autoComplete="off"
					/>
				</div>

				<div
					className={cn(styles.field, {
						[styles.error]: !!errors?.email?.type
					})}
				>
					<input
						{...register('email', {
							required: true,
							pattern: emailPattern
						})}
						name="email"
						placeholder="Email*"
						type="text"
						autoComplete="off"
					/>
				</div>

				<div className={styles.textarea}>
					<textarea
						{...register('suggestion')}
						name="suggestion"
						placeholder="Опишите ваше предложение"
					/>
				</div>

				<div className={styles.file}>
					<div className={styles.main}>
						<div className={styles.uploading}>
							<input
								{...register('file', {
									validate: {
										fileExtension: validateFileExtension,
										fileSize: validateFileSize
									}
								})}
								name="file"
								type="file"
								onChange={handleFileChange}
								accept=".docx,image/*,application/pdf,"
							/>
							Прикрепить файл
						</div>
						<div className={styles.name}>
							{fileName.length
								? fileName
								: 'Файл не выбран (docx, pdf, jpeg, png)'}
						</div>
					</div>
					{errors?.file && (
						<p className={styles.fileError}>{errors.file.message}</p>
					)}
				</div>

				<div
					className={cn(styles.checkbox, {
						[styles.error]: !!errors?.agreement?.type
					})}
				>
					<input
						{...register('agreement', {
							required: true
						})}
						id="userAgreement"
						type="checkbox"
						defaultChecked
						name="agreement"
					/>
					<label htmlFor="userAgreement">
						<span>Я согласен на использование персональных данных</span>
						<FontAwesomeIcon name="FaCheckCircle" />
					</label>
				</div>

				{submitStatus === SubmitStatus.Unsent && (
					<button className={styles.submit} type="submit">
						Отправить
					</button>
				)}

				{submitStatus === SubmitStatus.Pending && (
					<div className={styles.spinnerWrapper}>
						<Spinner className={styles.spinner} />
					</div>
				)}

				{submitStatus === SubmitStatus.Error && (
					<div className={styles.errorMessage}>{errorMessage}</div>
				)}
			</form>
		</PopupCard>
	)
}

export default BecomePartner
