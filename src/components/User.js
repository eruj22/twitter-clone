import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"
import { Button, Avatar } from "@material-ui/core"
import { db } from "../services/firebase"
import UserUpdateModal from "./UserUpdateModal"
import { getFromLocalStorage } from "../utils/functions"

function User() {
  const [displayUserData, setDisplayUserData] = useState([])
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)

  const openUserModal = () => {
    setIsUserModalOpen(true)
  }

  const getUserData = () => {
    db.collection("users")
      .doc(getFromLocalStorage("userId"))
      .onSnapshot((doc) => {
        setDisplayUserData(doc.data())
      })
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <main className="user">
      <header className="user__header">
        <Link className="user__linkBack" to="/home">
          <KeyboardBackspaceIcon />
        </Link>
        <h2 className="user__title">user</h2>
      </header>

      <div className="user__backgroundImage"></div>

      <div className="user__profile">
        <div>
          <Avatar id="user__avatar" src={displayUserData.image} />
          <h2 className="user__name">{displayUserData.name}</h2>
          <p className="user__username">@{displayUserData.username}</p>
        </div>
        <Button className="user__updateBtn" onClick={openUserModal}>
          Edit profile
        </Button>
      </div>

      <UserUpdateModal
        isUserModalOpen={isUserModalOpen}
        setIsUserModalOpen={setIsUserModalOpen}
      />
    </main>
  )
}

export default User
