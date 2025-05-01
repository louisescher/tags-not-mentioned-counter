import { counter, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(counter).values({
		id: 0,
		lastMentionTimestamp: new Date()
	});
}
