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
          <label>
            Username: <input name="username" />
          </label>
        </div>
        <div>
          <label>
            Password: <input type='password' />
          </label>
        </div>
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}
