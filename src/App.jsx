import { useState } from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import { Home } from "./components/Home"
import { Notes } from "./components/Notes"
import { Note } from "./components/Note"
import { Users } from "./components/Users"
import { Login } from "./components/Login"

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
  ])

  const [user, setUser] = useState(null)

  const login = user => setUser(user)

  const style = { padding: 5 }

  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to='/' style={style}>Home</Link>
          <Link to='/notes' style={style}>Notes</Link>
          <Link to='/users' style={style}>Users</Link>
          {user
            ? <em>{user} logged in</em>
            : <Link to='/login' style={style}>Login</Link>
          }
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Notes notes={notes} />} />
          <Route path='/notes/:id' element={<Note notes={notes} />} />
          <Route path='/users' element={user ? <Users /> : <Navigate replace to='/login' />} />
          <Route path='login' element={<Login onLogin={login} />} />
        </Routes>
      </BrowserRouter>

      <footer>
        <br />
        <em>Note App 2024</em>
      </footer>
    </div>
  )
}

export default App
