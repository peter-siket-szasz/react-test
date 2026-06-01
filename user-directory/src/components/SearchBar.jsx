export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      className="search-bar"
      value={value}
      onChange={onChange}
      placeholder="Search by name or email..."
      aria-label="Search users by name or email"
    />
  )
}
