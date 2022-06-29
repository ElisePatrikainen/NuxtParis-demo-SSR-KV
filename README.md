# KV Todo app

## Setup

- Créer un `wrangler.toml` à la racine en suivant `wrangler.toml.example`

- `yarn install`

- `yarn dev`

## Build

- `yarn build:cloudflare`

## Preview

- `npx miniflare .output/server/index.mjs --site .output/public`

## Ship

- `npx @cloudflare/wrangler publish`

## Unstorage bug workaround

Tant que ce [bug fix](https://github.com/unjs/unstorage/pull/64) n'est pas passé, tu peux faire ça avant le `yarn build:cloudflare` :

Dans `/node_modules/unstorage/dist/drivers/cloudflare-kv-binding.mjs`, remplace la ligne 5 par `const kvList = await binding.list({prefix: base})`