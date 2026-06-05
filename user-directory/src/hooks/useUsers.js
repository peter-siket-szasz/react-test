import { useState, useEffect } from 'react'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    // setLoading(true)
    // fetch(USERS_URL)
    //   .then(res => res.json())
    //   .then(data => setUsers(data))
    //   .catch(e => setError(e))
    //   .finally(setLoading(false))

    const loadUsers = async () => {
      setLoading(true)
      try {
        const res = await fetch(USERS_URL);

        if (!res.ok) {
          throw new Error('Error happened')
        }

        const data = await res.json()
        setUsers(data)
        setError(null)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    loadUsers()

  }, [])
  return { users, loading, error }
}
