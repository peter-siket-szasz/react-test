export default function UserCard({ user }) {
  // TODO: show name, email, company.name, address.city
  return <article className="user-card">
    <span>{user.name}</span>
    <span>{user.email}</span>
    <span>{user.company.name}</span>
    <span>{user.address.city}</span>
  </article>
}
