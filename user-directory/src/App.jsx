import { useState } from 'react'
import { useUsers } from './hooks/useUsers'
import CapgeminiHeader from './components/CapgeminiHeader'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

function App() {
  const { users, loading, error } = useUsers()
  const [search, setSearch] = useState('')

  // TODO: filter users by name or email (case-insensitive)

  return (
    <>
      <CapgeminiHeader />
      <div className="app">
        <header className="app__header">
          <h1>User Directory</h1>
        </header>

        <SearchBar
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {/* TODO: loading, error, and UserList states */}
      </div>
    </>
  )
}

export default App
