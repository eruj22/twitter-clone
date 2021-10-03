import React, { useState } from "react"
import CloseIcon from "@material-ui/icons/Close"
import TextField from "@material-ui/core/TextField"
import { useStateValue } from "../utils/StateProvider"
import { Button } from "@material-ui/core"
import { db } from "../services/firebase"
import { getFromLocalStorage } from "../utils/functions"

function UserUpdateModal({ isUserModalOpen, setIsUserModalOpen }) {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue([])
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [userImage, setUserImage] = useState("")

  const saveChangesToProfile = (e) => {
    e.preventDefault()

    db.collection("users")
      .doc(getFromLocalStorage("userId"))
      .set({
        name,
        username: userName,
        image: userImage,
        uid: getFromLocalStorage("userId"),
      })

    // dispatchProfileChanges()
    setIsUserModalOpen(false)
  }

  const dispatchProfileChanges = () => {
    dispatch({
      type: "CURRENT_USER_DATA",
      currentUserData: {
        name,
        username: userName,
        image: userImage,
      },
    })
  }

  const closeTweet = () => {
    setIsUserModalOpen(false)
  }
  return (
    <div
      className={isUserModalOpen ? `userModal userModal--open` : `userModal`}
    >
      <div className="userModal__container">
        <div className="userModal__header">
          <button className="userModal__icon" onClick={closeTweet}>
            <CloseIcon />
          </button>
          <div className="userModal__title">Edit profile</div>
          <Button type="submit" onClick={saveChangesToProfile}>
            update
          </Button>
        </div>

        <form className="form">
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Username"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Image link"
            variant="outlined"
            value={userImage}
            onChange={(e) => setUserImage(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default UserUpdateModal
