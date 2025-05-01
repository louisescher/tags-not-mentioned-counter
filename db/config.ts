import { defineDb, defineTable, column } from 'astro:db';

const counter = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    lastMentionTimestamp: column.date({ default: new Date() })
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    counter
  }
});
