import UserCard from './UserCard'

export default function UserList({ users }) {
  // TODO: grid of UserCards; "No users found" when users is empty
  return <div className="user-list" >
    {users.map(u => <UserCard user={u} key={u.id}></UserCard>)}
  </div>
}
