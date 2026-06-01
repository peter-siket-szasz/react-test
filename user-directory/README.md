# User Directory

Interview exercise — the UI shell is ready (Capgemini header + title). **You implement the rest** in the stub files under `src/`.

## Setup

From the repository root:

```bash
npm install
npm run dev
```

## Your task

Build a small app that loads users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and lets you search them.

You need to:

- **Fetch data** in `useUsers.js` — return `{ users, loading, error }` using only `useState` and `useEffect`
- **Search** — controlled `SearchBar` (placeholder: `Search by name or email...`); filter by name or email in `App.jsx` (case-insensitive)
- **Show users** — `UserCard` displays name, email, company, and city; `UserList` renders a grid and shows `No users found` when empty
- **Handle states** — `LoadingSpinner` while fetching, `ErrorMessage` in red on failure; wire all of this in `App.jsx`
- **Style it** in `App.css` — centered layout (max-width 1000px), responsive card grid (`auto-fill`, `minmax(250px, 1fr)`), simple card borders/shadows

Plain React and CSS only — no extra libraries.

Optional if time allows: sorting, expandable cards.

## Project layout

```
user-directory/src/
  components/   SearchBar, UserCard, UserList, LoadingSpinner, ErrorMessage
  hooks/        useUsers.js
  App.jsx       App.css
```
