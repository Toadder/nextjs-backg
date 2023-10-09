'use client';

import axios from 'axios';
import cn from 'clsx';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Heading from '@/components/ui/Heading/Heading';
import Spinner from '@/components/ui/Spinner/Spinner';

import { isEmpty } from '@/utils/validations/isEmpty';
import { emailPattern } from '@/utils/validations/regex';

import { IArticleCommentsForm } from '../../article.interface';

import styles from './CommentsForm.module.scss';
import {
	ICommentsBody,
	ICommentsInput,
	MessageBackground,
	SubmitStatus
} from './comments-form.interface';

const CommentsForm: FC<IArticleCommentsForm> = ({ postId }) => {
	if (!postId) return;

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ICommentsInput>({
		shouldFocusError: false
	});

	const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(
		SubmitStatus.Unsent
	);
	const [responseMessage, setResponseMessage] = useState<string>('');
	const [messageBackgroundClass, setMessageBackgroundClass] =
		useState<MessageBackground>(MessageBackground.Green);

	const onSubmit: SubmitHandler<ICommentsInput> = async (fields) => {
		const body: ICommentsBody = {
			postId,
			name: fields.name.trim(),
			email: fields.email.trim(),
			content: fields.content.trim()
		};

		setSubmitStatus(SubmitStatus.Pending);

		try {
			const response = await axios.post('/api/comment', body);
			setResponseMessage(response.data?.message || '');

			if (response.statusText !== 'OK')
				setMessageBackgroundClass(MessageBackground.Red);

			reset();
		} catch (error) {
			console.error(error);
			setMessageBackgroundClass(MessageBackground.Red);
			setResponseMessage('При отправке запроса произошла ошибка.');
		} finally {
			setSubmitStatus(SubmitStatus.Submit);
			setTimeout(() => setSubmitStatus(SubmitStatus.Unsent), 4000);
		}
	};

	return (
		<div className={styles.root}>
			<Heading className={styles.title}>Оставьте комментарий</Heading>
			<p className={styles.text}>
				Ваш адрес электронной почты не будет опубликован. Поля, помеченные
				знаком "*", обязательны для заполнения.
			</p>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div
					className={cn(styles.field, {
						[styles.error]: ['required', 'empty'].includes(
							errors?.name?.type || ''
						)
					})}
				>
					<input
						{...register('name', {
							required: true,
							validate: { empty: isEmpty }
						})}
						name="name"
						type="text"
						placeholder="Имя*"
						autoComplete="off"
					/>
				</div>
				<div
					className={cn(styles.field, {
						[styles.error]: ['required', 'pattern'].includes(
							errors?.email?.type || ''
						)
					})}
				>
					<input
						{...register('email', { required: true, pattern: emailPattern })}
						name="email"
						type="email"
						placeholder="Email*"
						autoComplete="off"
					/>
				</div>
				<div
					className={cn(styles.textarea, {
						[styles.error]: ['required', 'empty'].includes(
							errors?.content?.type || ''
						)
					})}
				>
					<textarea
						{...register('content', {
							required: true,
							validate: { empty: isEmpty }
						})}
						name="content"
						placeholder="Комментарий*"
					/>
				</div>
				{submitStatus === SubmitStatus.Unsent && (
					<button type="submit" className={styles.submit}>
						Оставить комментарий
					</button>
				)}
				{submitStatus === SubmitStatus.Pending && (
					<div className={styles.spinnerWrapper}>
						<Spinner className={styles.spinner} />
					</div>
				)}
			</form>
			{submitStatus === SubmitStatus.Submit && (
				<div className={cn(styles.message, messageBackgroundClass)}>
					{responseMessage}
				</div>
			)}
		</div>
	);
};

export default CommentsForm;
