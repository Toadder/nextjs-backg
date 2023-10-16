import { NextResponse } from 'next/server'

import { ICommentsBody } from '@/components/screens/article/Comments/CommentsForm/comments-form.interface'

import { emailPattern } from '@/utils/validations/regex'

import client from '@/config/apollo/client'
import { CREATE_COMMENT } from '@/config/apollo/queries/create-comment'

export async function POST(request: Request) {
	const body: ICommentsBody = await request.json()

	if (!body.name.trim() || !body.content.trim() || !body.email.trim())
		return NextResponse.json(
			{ message: 'Не все обязательные поля были заполнены.' },
			{ status: 400 }
		)

	if (!emailPattern.test(body.email))
		return NextResponse.json(
			{ message: 'Неверный формат почтового адреса.' },
			{ status: 400 }
		)

	if (typeof body.postId !== 'number')
		return NextResponse.json(
			{ message: 'Отсутствует уникальный идентификатор поста.' },
			{ status: 500 }
		)

	const responseJson = await client.mutate({
		mutation: CREATE_COMMENT,
		variables: {
			author: body.name,
			authorEmail: body.email,
			commentOn: body.postId,
			content: body.content
		}
	})

	if (responseJson.errors)
		return NextResponse.json(
			{ message: 'При отправке комментария произошла ошибка.' },
			{ status: 500 }
		)

	if (
		responseJson.data?.createComment !== null &&
		responseJson.data?.createComment?.success
	) {
		return NextResponse.json(
			{ message: 'Ваш комментарий успешно отправлен на модерацию.' },
			{ status: 200 }
		)
	}

	return NextResponse.json(
		{ message: 'При обработке запроса произошла ошибка.' },
		{ status: 500 }
	)
}
