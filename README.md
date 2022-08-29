# Next and Auth0 starter

## Installation

Clone the repository :

```bash
git clone https://github.com/Skyleen77/NextAuth0Starter.git
```

Install the node packages :

```bash
npm i
# or
yarn
```

## Configuration

Remove the `.example` from the `.env.local.example` file name, and configure this file with your Auth0 project information.

.env.local.example :

```bash
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://{DOMAIN}'
AUTH0_CLIENT_ID='{CLIENT_ID}'
AUTH0_CLIENT_SECRET='{CLIENT_SECRET}'
```

Open your terminal and type `openssl rand -hex 32`, then take the code in 32 bytes value and paste it in AUTH0_SECRET.
Enter the Auth0 DOMAIN, CLIENT_ID and CLIENT_SECRET of your project and launch the app.

## Launching

Launch the application :

```bash
npm run dev
# or
yarn dev
```
