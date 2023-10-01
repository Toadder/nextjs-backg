import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

import { pagesToRevalidate } from '@/constants/pages';

export async function GET(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get('secret');

	if (secret !== process.env.SECRET_TOKEN)
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });

	pagesToRevalidate.forEach((value) => {
		revalidatePath(value, 'layout');
		revalidatePath(value, 'page');
	});
	return NextResponse.json({ revalidated: true }, { status: 200 });
}
