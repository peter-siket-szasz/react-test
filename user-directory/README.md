# User Directory

A React + Vite frontend interview starter. The repo ships with file scaffolding and TODOs — **implement the requirements below** during the interview.

Run `npm install` and `npm run dev` from the **repository root** (Vite is configured to load this folder).

## Project structure

```
user-directory/
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
  public/
```

## Requirements

1. **useUsers.js** — custom hook that:
   - Fetches from https://jsonplaceholder.typicode.com/users
   - Returns `{ users, loading, error }`
   - Uses `useState` and `useEffect` only

2. **SearchBar.jsx** — controlled input that:
   - Accepts `value` and `onChange` props
   - Placeholder: `"Search by name or email..."`

3. **UserCard.jsx** — displays a single user:
   - Shows: name, email, `company.name`, `address.city`
   - Clean card layout with subtle border and padding

4. **UserList.jsx** — receives filtered users array as prop:
   - Renders a grid of `UserCard` components
   - Shows `"No users found"` if array is empty

5. **LoadingSpinner.jsx** — simple centered loading text or spinner

6. **ErrorMessage.jsx** — displays error message in red

7. **App.jsx** — orchestrates everything:
   - Uses `useUsers` hook
   - Manages search state
   - Filters users by name or email (case-insensitive, client-side)
   - Renders: `SearchBar`, loading state, error state, `UserList`
   - No external libraries, plain CSS only

8. **App.css** — minimal styles:
   - Card grid using CSS Grid (`auto-fill`, `minmax(250px)`)
   - Basic card styles (border, border-radius, padding, box-shadow)
   - Centered layout with max-width 1000px

## Interview extensions (not implemented)

Candidates may add sorting and expandable card functionality during the interview.

## Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start dev server           |
| `npm run build`   | Production build           |
| `npm run preview` | Preview production build   |
