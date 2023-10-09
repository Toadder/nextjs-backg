import { NextRequest, NextResponse } from 'next/server';

import client from '@/config/apollo/client';
import { GET_EMAIL_CONFIG } from '@/config/apollo/queries/get-feedback-config';
import transporter from '@/config/nodemailer/transporter';

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

	try {
		const { data } = await client.query({ query: GET_EMAIL_CONFIG });

		const {
			emailforfeedback: emailForFeedback
		}: { emailforfeedback: string | null } = data?.config?.acfSettings;

		if(!emailForFeedback?.length) throw new Error("Ошибка при получении email.");

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: emailForFeedback,
			subject: 'Новая заявка на сотрудничество',
			html: `
				<p>Тип сотрудничества: ${type}</p>
				<p>Название компании: ${company}</p>
				<p>Адрес сайта: ${site}</p>
				<p>ФИО: ${name}</p>
				<p>Номер телефона: ${phone}</p>
				<p>Email: ${email}</p>
				${suggestion?.length ? '<p>Предложение: ' + suggestion + '</p>' : ''}
			`,
			attachments: file
				? [
						{
							filename: file.name,
							content: Buffer.from(await file.arrayBuffer())
						}
				  ]
				: []
		});

		return NextResponse.json(
			{ message: 'Форма успешно отправлена.' },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: 'При отправке формы произошла ошибка.' },
			{ status: 500 }
		);
	}
}
