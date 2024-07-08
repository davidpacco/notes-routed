import { useState } from "react"
import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom"
import { Home } from "./components/Home"
import { Notes } from "./components/Notes"
import { Note } from "./components/Note"
import { Users } from "./components/Users"
import { Login } from "./components/Login"
import { Alert, Nav, Navbar } from "react-bootstrap"

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

  const style = { padding: 5 }

  return (
    <div className='container'>
      {message && <Alert variant='success'>{message}</Alert>}

      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className="me-auto">
            <Nav.Link href="#" as="span">
              <Link to='/' style={style}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to='/notes' style={style}>Notes</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to='/users' style={style}>Users</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {user
                ? <em>{user} logged in</em>
                : <Link to='/login' style={style}>Login</Link>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

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
    </div>
  )
}

export default App
