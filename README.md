# Portfolio Website

เว็บไซต์ Portfolio สำหรับรวบรวมประวัติส่วนตัว ทักษะ ผลงาน และช่องทางการติดต่อ พัฒนาด้วย Next.js, TypeScript และ Tailwind CSS

> โปรเจกต์อยู่ในช่วงเริ่มต้น ปัจจุบันเป็นหน้าเริ่มต้นสำหรับพัฒนาต่อยอด

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework โดยใช้ App Router
- [React 19](https://react.dev/) — สร้างส่วนติดต่อผู้ใช้
- [TypeScript](https://www.typescriptlang.org/) — เพิ่ม type safety ให้กับโค้ด
- [Tailwind CSS 4](https://tailwindcss.com/) — จัดการ styling แบบ utility-first
- [ESLint](https://eslint.org/) — ตรวจสอบคุณภาพและรูปแบบของโค้ด

## Requirements

- Node.js 20.9 ขึ้นไป
- npm 10 ขึ้นไป

## Getting Started

1. Clone repository และเข้าไปยังโฟลเดอร์โปรเจกต์

   ```bash
   git clone https://github.com/SaGaGro/portfolio-website.git
   cd portfolio-website
   ```

2. ติดตั้ง dependencies

   ```bash
   npm install
   ```

3. เปิด development server

   ```bash
   npm run dev
   ```

4. เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

ไฟล์หน้าแรกอยู่ที่ `src/app/page.tsx` และจะอัปเดตอัตโนมัติเมื่อแก้ไขโค้ด

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | เปิด development server |
| `npm run build` | สร้าง production build |
| `npm run start` | เปิด production server หลังจาก build |
| `npm run lint` | ตรวจสอบโค้ดด้วย ESLint |

## Project Structure

```text
Frontend/
├── public/              # Static assets
├── src/
│   └── app/
│       ├── globals.css  # Global styles และ Tailwind CSS
│       ├── layout.tsx   # Root layout
│       └── page.tsx     # หน้าแรก
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS/Tailwind configuration
├── package.json         # Scripts และ dependencies
└── tsconfig.json        # TypeScript configuration
```

## Styling

โปรเจกต์ใช้ Tailwind CSS 4 ผ่าน `@tailwindcss/postcss` โดย import Tailwind ใน `src/app/globals.css` สามารถใช้ utility classes ใน React components ได้ทันที

## Build for Production

```bash
npm run build
npm run start
```

ก่อน commit หรือ deploy แนะนำให้ตรวจสอบโปรเจกต์ด้วย:

```bash
npm run lint
npm run build
```

## Deployment

โปรเจกต์สามารถ deploy บน [Vercel](https://vercel.com/) หรือแพลตฟอร์มอื่นที่รองรับ Next.js ได้

## License

โปรเจกต์นี้จัดทำขึ้นเพื่อใช้เป็น Portfolio ส่วนบุคคล
