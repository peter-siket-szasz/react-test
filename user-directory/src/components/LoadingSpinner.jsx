export default function LoadingSpinner() {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <span className="loading-spinner__icon" aria-hidden="true" />
      <p>Loading users...</p>
    </div>
  )
}
