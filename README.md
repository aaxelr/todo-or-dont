# To do, or not to do

A basic Todo app where you can store todos and todon'ts.

Made with:

- [SvelteKit](https://kit.svelte.dev/) - Full-stack framework
- [Pico.css](https://picocss.com/) - Styling
- [BoxIcons Solid](https://github.com/atisawd/boxicons) through [Icônes](https://icones.js.org/) - SVG icons
- [SQLite](https://www.sqlite.org/index.html) - Database
- [Prisma](https://www.prisma.io/) - ORM

## Developing

Install dependencies: 
```bash
pnpm install
```
or `npm install` or `yarn`

Sync local database using Prisma:
```bash
pnpx prisma db push
```

Start a development server:
```bash
pnpm run dev
```

View database in the browser with Prisma studio:
```bash
npx prisma studio
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
