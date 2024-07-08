import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

export function Login({ onLogin }) {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    onLogin(event.target.username.value)
    navigate('/')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <TextField label='Username' name='username' />
        </div>
        <div>
          <TextField label='Password' type='password' name='password' />
        </div>
        <div>
          <Button variant='contained' color='primary' type='submit'>
            Log in
          </Button>
        </div>
      </form>
    </div>
  )
}
