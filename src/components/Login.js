import React, { useState } from "react"
import TwitterIcon from "@material-ui/icons/Twitter"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../services/firebase"

function Login() {
  let history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        history.push("/home")
      })
      .catch((error) => alert(error.message))
  }

  return (
    <section className="login">
      <Link to="/">
        <TwitterIcon className="icon--small" />
      </Link>
      <h2>Log in to Twitter</h2>
      <form className="login__form">
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="cta cta--full" onClick={signIn}>
          Log In
        </Button>
      </form>
      <Link to="/signup" className="login__link">
        Sign up for Twitter
      </Link>
    </section>
  )
}

export default Login
