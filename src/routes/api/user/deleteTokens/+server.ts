import mongoose from 'mongoose';
import type { RequestHandler } from './$types';
import { auth } from '../../db';

export const POST: RequestHandler = async ({ request }) => {
	/*
        data: [
            {
                token: 'lpjXnwbnj8m8Y6BS1FPKTaBmqcVFWmOe',
                userID: '1000hlslfbgzlby',
                expiresIn: 1696933131867,
                createdAt: '2023-10-03T10:18:51.868Z',
                updatedAt: '2023-10-03T10:18:51.868Z',
                email: 'mhmd-alaa@hotmail.com',
                role: 'editor'
            }
        ]
    */
	const data = await request.json();

	// admins count
	const AUTH_USER = mongoose.models['auth_user'];
	const AUTH_TOKENS = mongoose.models['auth_tokens'];
	let adminLength = (await AUTH_USER.find({ role: 'admin' })).length;
	let flag = false;

	data.forEach(async (user: any) => {
		if (user.role == 'admin' && adminLength == 1) {
			flag = true;
			return;
		}
		adminLength -= user.role == 'admin' ? 1 : 0;

		// delete user
		await auth.deleteUser(user.userID);
		// delete tokens
		await AUTH_TOKENS.deleteMany({ userID: user.userID });
	});

	if (flag) return new Response(JSON.stringify({ success: false, message: 'Cannot delete all admins' }), { status: 400 });

	return new Response(JSON.stringify({ success: true }), { status: 200 });
};
