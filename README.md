# Statxo

# Introduction

The ReactJS-based tool helps you manage tasks easily and improve your business operations. It's great for handling many tasks, tracking finances, and getting updates on time. With real-time editing, detailed tracking, and a simple interface, it keeps you organized and in control.

## Project Type

Frontend | Backend | FullStack

## Deployed App

- Frontend: https://statxo.vercel.app/

- Backend: https://statxo-ducv.onrender.com/

## Directory Structure

```
├── .gitignore
├── README.md
├── backend/
│   ├── controller/
│   │   ├── tasks.controller.js
│   │   └── users.controller.js
│   ├── index.js
│   ├── middleware/
│   │   └── users.middleware.js
│   ├── models/
│   │   ├── blacklistToken.model.js
│   │   ├── task.model.js
│   │   └── users.model.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routes/
│   │   ├── tasks.routes.js
│   │   └── users.routes.js
│   ├── update_logs/
│   │   └── .dummy
│   └── utils/
│   │   └── db.config.js
└── frontend/
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Routes/
│   │   │   ├── AllRoutes.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── assets/
│   │   │   ├── favicon.png
│   │   │   ├── homePage.jpg
│   │   │   ├── logo.png
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── contexts/
│   │   │   └── authContext.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── StatxoData.jsx
│   │   └── utils/
│   │   │   └── vars.js
│   └── vite.config.js

```

## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running.

git clone https://github.com/SatyajeetKumarRao/Statxo.git

## To get inside FrontEnd directory

```
cd frontend
npm install
```

#### To start frontend App

```
npm run dev
```

## To get inside BackEnd directory

```
cd backend
npm install
```

#### To start backend App

```
npm run server
```

## Snapshot of Website

## Technology Stack

- React.js
- NodeJS
- ExpressJS
- Chakra-ui
