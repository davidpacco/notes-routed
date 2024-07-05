import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Home } from "./components/Home"
import { Notes } from "./components/Notes"
import { Users } from "./components/Users"

function App() {
  const style = { padding: 5 }

  return (
    <BrowserRouter>
      <div>
        <Link to='/' style={style}>Home</Link>
        <Link to='/notes' style={style}>Notes</Link>
        <Link to='/users' style={style}>Users</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
