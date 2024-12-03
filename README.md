This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

Next.js uses the [`.env.local`](https://nextjs.org/docs/basic-features/environment-variables) file to inject environment variables into the app.

- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_xxxxxxxxxxxxxxxxxxxx
- CLERK_SECRET_KEY=sk_xxxxxxxxxxxxxxxxxxxx
- NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

## In middleware.js:

In the `middleware.js` file, I have defined protected routes that require authentication.

Regards,
[SAQIB ALI](https://github.com/saqib-dev-404)
