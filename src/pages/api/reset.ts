import type { APIRoute } from "astro";
import { counter, db } from "astro:db";

export const GET: APIRoute = async (ctx) => {
	const authHeader = ctx.request.headers.get("Authorization");

	if (!authHeader || authHeader !== `Bearer ${import.meta.env.AUTH_TOKEN}`) {
		return new Response("Unauthorized", { status: 401 });
	}

	const current = await db.select().from(counter);

	let newHighscore = current[0]?.lastMentionTimestamp ? Math.floor((Date.now() - current[0].lastMentionTimestamp.getTime()) / (1000 * 60 * 60 * 24)) : 0;

	await db.update(counter).set({
		lastMentionTimestamp: new Date(),
		highscore: newHighscore > current[0]?.highscore ? newHighscore : current[0]?.highscore
	});

	return new Response("Success", { status: 200 });
}