import { useState } from 'react'
import { useUsers } from './hooks/useUsers'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

function App() {
  const { users, loading, error } = useUsers()
  const [search, setSearch] = useState('')

  const query = search.trim().toLowerCase()
  const filteredUsers = users.filter((user) => {
    if (!query) return true
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    )
  })

  return (
    <div className="app">
      <header className="app__header">
        <h1>User Directory</h1>
      </header>

      <SearchBar
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <LoadingSpinner />}
      {!loading && error && <ErrorMessage message={error} />}
      {!loading && !error && <UserList users={filteredUsers} />}
    </div>
  )
}

export default App
