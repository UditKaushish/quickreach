# QuickReach

Marketing website for QuickReach, a digital agency offering website development, brand marketing and AI chatbot integration.

## Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Express and Nodemailer, a single endpoint that emails contact-form submissions

## Structure

| Path | Contents |
|---|---|
| `app/` | Pages and sections: Hero, Services, About, Why Us, Portfolio, Team, Contact, ChatBot |
| `backend/` | Express server exposing `POST /send-email` |

## Run locally

Frontend:

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

Backend (needed for the contact form):

```bash
cd backend
npm install
cp .env.example .env   # then fill in EMAIL_USER and EMAIL_PASS
node server.js
```

The server runs at http://localhost:5000. `EMAIL_PASS` must be a Gmail app password, not your account password.
