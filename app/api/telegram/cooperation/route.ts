import axios, { AxiosResponse } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { parseToFormData } from '@/utils/data/parseToFormData';

import client from '@/config/apollo/client';
import { GET_TELEGRAM_CONFIG } from '@/config/apollo/queries/get-feedback-config';

export async function POST(request: NextRequest) {
	const data = await request.formData();

	const type: string = data.get('type') as string;
	const company: string = data.get('company') as string;
	const site: string = data.get('site') as string;
	const name: string = data.get('name') as string;
	const phone: string = data.get('phone') as string;
	const email: string = data.get('email') as string;
	const suggestion: string = data.get('suggestion') as string;
	const file: File | null = data.get('file') as unknown as File;
	const isAgree: string = data.get('isAgree') as string;

	if (
		!type?.length ||
		!company?.length ||
		!site?.length ||
		!name?.length ||
		!phone?.length ||
		!email?.length ||
		!isAgree?.length
	)
		return NextResponse.json(
			{ message: 'Не все обязательные поля заполнены.' },
			{ status: 400 }
		);

	const messageText: string = [
		'<b>Новая заявка на сотрудничество</b>',
		`Тип сотрудничества: ${type}`,
		`Название компании: ${company}`,
		`Адрес сайта: ${site}`,
		`ФИО: ${name}`,
		`Номер телефона: ${phone}`,
		`Email: ${email}`,
		`${suggestion?.length ? 'Предложение: ' + suggestion : ''}`
	].join('\n');

	try {
		const { data } = await client.query({ query: GET_TELEGRAM_CONFIG });

		const {
			senderbottoken: token,
			telegramchatid: chatId
		}: {
			senderbottoken: string | null;
			telegramchatid: number | null;
		} = data?.config?.acfSettings;

		let response: AxiosResponse;

		if (file) {
			response = await axios.post(
				`https://api.telegram.org/bot${token}/sendDocument`,
				parseToFormData({
					chat_id: chatId,
					document: file,
					caption: messageText,
					parse_mode: 'HTML'
				})
			);
		} else {
			response = await axios.get(
				`https://api.telegram.org/bot${token}/sendMessage`,
				{
					params: {
						chat_id: chatId,
						text: messageText,
						parse_mode: 'HTML'
					}
				}
			);
		}

		if (!response?.data?.ok)
			throw new Error('При отправке сообщения произошла ошибка.');

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: 'При отправке формы произошла ошибка.' },
			{ status: 500 }
		);
	}
}
