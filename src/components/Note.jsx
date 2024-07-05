import { useParams } from "react-router-dom"

export function Note({ notes }) {
  const { id } = useParams()
  const note = notes.find(note => note.id === Number(id))
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div><strong>{note.important ? 'Important' : ''}</strong></div>
    </div>
  )
}