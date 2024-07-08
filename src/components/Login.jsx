import { Button, Form } from "react-bootstrap"
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
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' name='username' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' />
        </Form.Group>
        <Button variant='primary' type='submit'>Log in</Button>
      </Form>
    </div>
  )
}
