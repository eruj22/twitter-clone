import React, { useState } from "react"
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"
import { useStateValue } from "../utils/StateProvider"
import { Button, Avatar } from "@material-ui/core"
import firebase from "firebase"

function User() {
  const [{ user }, dispatch] = useStateValue()
  const [userName, setUserName] = useState("")
  const [userImage, setUserImage] = useState("")
  console.log("name: ", user.userName, "img: ", user.photoURL)

  const changeProfile = (e) => {
    e.preventDefault()

    console.log(1)
  }

  return (
    <main className="user">
      <header className="user__header">
        <Link className="user__linkBack" to="/home">
          <KeyboardBackspaceIcon />
        </Link>
        <h2 className="user__title">user</h2>
      </header>
      <form>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="image"
          value={userImage}
          onChange={(e) => setUserImage(e.target.value)}
        />
        <Button onClick={changeProfile}>Tweet</Button>
      </form>
    </main>
  )
}

export default User
