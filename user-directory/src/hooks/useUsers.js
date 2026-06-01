import { useState, useEffect } from 'react'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // TODO: fetch from USERS_URL and update users, loading, error
  }, [])

  return { users, loading, error }
}
