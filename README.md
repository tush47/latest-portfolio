# Tushar Sohal — Portfolio

Single-page portfolio built with Next.js, React, Mantine, and Framer Motion.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

Update copy, skills, experience, and education in `src/data/content.ts`.

Medium posts are fetched live from `https://medium.com/@tusharsohal`.

### Contact form

Uses [Web3Forms](https://web3forms.com) from the browser (free plan blocks server-side calls).

1. Create a free access key at web3forms.com (use `tusharsohal2003@gmail.com`)
2. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Restart `npm run dev`

## Stack

- Next.js 15 (App Router)
- Mantine UI + Tabler Icons
- Framer Motion
- Tailwind CSS
- Plus Jakarta Sans
