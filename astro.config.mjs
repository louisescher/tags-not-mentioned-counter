// @ts-check
import { defineConfig, envField } from 'astro/config';

import node from '@astrojs/node';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: "https://tags.lou.gg",
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  env: {
    schema: {
      AUTH_TOKEN: envField.string({ context: "server", access: "secret" }),
    }
  },
  integrations: [db()],
});