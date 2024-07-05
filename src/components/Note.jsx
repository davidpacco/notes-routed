export function Note({ note }) {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div><strong>{note.important ? 'Important' : ''}</strong></div>
    </div>
  )
}