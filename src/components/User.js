import React from "react"
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"

function User() {
  return (
    <main className="user">
      <header className="user__header">
        <Link className="user__linkBack" to="/home">
          <KeyboardBackspaceIcon />
        </Link>
        <h2 className="user__title">user</h2>
      </header>
    </main>
  )
}

export default User
