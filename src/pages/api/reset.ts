import type { APIRoute } from "astro";
import { counter, db } from "astro:db";

export const GET: APIRoute = async (ctx) => {
	const authHeader = ctx.request.headers.get("Authorization");

	if (!authHeader || authHeader !== `Bearer ${import.meta.env.AUTH_TOKEN}`) {
		return new Response("Unauthorized", { status: 401 });
	}

	await db.update(counter).set({ lastMentionTimestamp: new Date() });

	return new Response("Success", { status: 200 });
}