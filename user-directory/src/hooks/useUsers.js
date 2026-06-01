import { useState, useEffect } from 'react'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchUsers() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(USERS_URL)
        if (!response.ok) {
          throw new Error(`Failed to fetch users (${response.status})`)
        }
        const data = await response.json()
        if (!cancelled) {
          setUsers(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Something went wrong')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchUsers()

    return () => {
      cancelled = true
    }
  }, [])

  return { users, loading, error }
}
