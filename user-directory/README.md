# User Directory

A React + Vite frontend interview starter. Fetches users from JSONPlaceholder, supports client-side search by name or email, and renders a responsive card grid.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/
    UserCard.jsx
    UserList.jsx
    SearchBar.jsx
    LoadingSpinner.jsx
    ErrorMessage.jsx
  hooks/
    useUsers.js
  App.jsx
  App.css
  main.jsx
```

## Interview extensions (not implemented)

Candidates may add:

- Sorting (e.g. by name or company)
- Expandable cards for full user details

## Scripts

| Command         | Description          |
| --------------- | -------------------- |
| `npm run dev`   | Start dev server     |
| `npm run build` | Production build     |
| `npm run preview` | Preview production build |
