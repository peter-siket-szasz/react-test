export default function UserCard({ user }) {
  return (
    <article className="user-card">
      <h2 className="user-card__name">{user.name}</h2>
      <p className="user-card__email">{user.email}</p>
      <p className="user-card__company">{user.company.name}</p>
      <p className="user-card__city">{user.address.city}</p>
    </article>
  )
}
