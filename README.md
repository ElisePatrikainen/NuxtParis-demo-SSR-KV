# KV app

Un exemple d'application utilisant les Cloudflare KV workers.

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
