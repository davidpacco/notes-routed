import { useState } from "react"
import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom"
import { Home } from "./components/Home"
import { Notes } from "./components/Notes"
import { Note } from "./components/Note"
import { Users } from "./components/Users"
import { Login } from "./components/Login"
import { Alert, AppBar, Button, Container, IconButton, Toolbar } from "@mui/material"

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
  const [message, setMessage] = useState(null)

  const match = useMatch('/notes/:id')

  const note = match
    ? notes.find(note => note.id === Number(match.params.id))
    : null

  const login = user => {
    setUser(user)
    setMessage(`Welcome ${user}`)
    setTimeout(() => setMessage(null), 5000)
  }

  return (
    <Container>
      {message && <Alert severity='success'>{message}</Alert>}

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" />
          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>
          <Button color='inherit' component={Link} to='/notes'>
            Notes
          </Button>
          <Button color='inherit' component={Link} to='/users'>
            Users
          </Button>
          {user
            ? <em>{user} logged in</em>
            : <Button color='inherit' component={Link} to='/login'>
              Login
            </Button>
          }
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes notes={notes} />} />
        <Route path='/notes/:id' element={<Note note={note} />} />
        <Route path='/users' element={user ? <Users /> : <Navigate replace to='/login' />} />
        <Route path='login' element={<Login onLogin={login} />} />
      </Routes>

      <footer>
        <br />
        <em>Note App 2024</em>
      </footer>
    </Container>
  )
}

export default App
