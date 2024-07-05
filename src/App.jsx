import { useState } from "react"

function Home() {
  return <div><h2>Home</h2></div>
}

function Notes() {
  return <div><h2>Notes</h2></div>
}

function Users() {
  return <div><h2>Users</h2></div>
}

function Content({ page }) {
  if (page === 'home') return <Home />
  if (page === 'notes') return <Notes />
  if (page === 'users') return <Users />
}

function App() {
  const [page, setPage] = useState('home')

  const toPage = page => event => {
    event.preventDefault()
    setPage(page)
  }

  const style = { padding: 5 }

  return (
    <>
      <div>
        <a href="" onClick={toPage('home')} style={style}>Home</a>
        <a href="" onClick={toPage('notes')} style={style}>Notes</a>
        <a href="" onClick={toPage('users')} style={style}>Users</a>
      </div>
      <Content page={page} />
    </>
  )
}

export default App
