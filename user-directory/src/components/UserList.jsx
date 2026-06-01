import UserCard from './UserCard'

export default function UserList({ users }) {
  if (users.length === 0) {
    return <p className="user-list__empty">No users found</p>
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
