import React, { useState } from "react"
import TwitterIcon from "@material-ui/icons/Twitter"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../services/firebase"

function Signup() {
  let history = useHistory()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        console.log(userCredentials)
        if (userCredentials) {
          history.push("/home")
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <section className="signup">
      <Link to="/">
        <TwitterIcon className="icon--small" />
      </Link>
      <h2>Create your account</h2>
      <form className="login__form">
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        {/* date of birth */}
        <Button className="cta cta--full" onClick={signUp}>
          Sign Up
        </Button>
      </form>
      <Link className="signup__link" to="/login">
        Already have an account? Login here
      </Link>
    </section>
  )
}

export default Signup
