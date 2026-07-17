# Kovo

Kovo is a modern, full‑stack ed‑tech platform where students can browse and buy
courses, learn at their own pace, and rate what they take — and where
instructors can create and manage courses and track their earnings. Built with
the MERN stack.

## Tech stack

- **Frontend:** React, Redux Toolkit, React Router, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Auth:** JWT + OTP email verification
- **Media:** Cloudinary
- **Payments:** Razorpay
- **Email:** Nodemailer (SMTP)

## Project structure

```
kovo/
├── src/            # React client
├── server/         # Express API + MongoDB models
├── public/
└── package.json    # client scripts
```

## Getting started (local)

**Prerequisites:** Node.js 16+, a MongoDB database, and Cloudinary / Razorpay /
SMTP credentials.

1. **Install dependencies**
   ```bash
   npm install
   cd server && npm install && cd ..
   ```

2. **Configure environment variables**
   - Copy `.env.example` → `.env` (client) and fill in `REACT_APP_BASE_URL`.
   - Copy `server/.env.example` → `server/.env` and fill in the server values.

3. **Run both client and server**
   ```bash
   npm run dev
   ```
   - Client: http://localhost:3000
   - API: http://localhost:4000

   (Or run them separately: `npm start` for the client, `npm run server` for the API.)

## Environment variables

**Client** (`.env`): `REACT_APP_BASE_URL`

**Server** (`server/.env`): `PORT`, `MONGODB_URL`, `JWT_SECRET`,
`MAIL_HOST`, `MAIL_USER`, `MAIL_PASS`, `CLOUD_NAME`, `API_KEY`, `API_SECRET`,
`FOLDER_NAME`, `RAZORPAY_KEY`, `RAZORPAY_SECRET`.

See the `.env.example` files for the full list with comments.

## Deployment

Kovo is two apps and is deployed separately:

- **Backend** (`server/`) → a Node host such as Render or Railway. Start
  command: `node index.js`. Add all the server env variables in the host's
  dashboard.
- **Frontend** (`src/`) → Vercel or Netlify. Set `REACT_APP_BASE_URL` to the
  deployed backend URL (e.g. `https://your-api-host.com/api/v1`) and redeploy
  (React env vars are baked in at build time).

> Never commit your real `.env` files — set secrets in the hosting dashboards.
