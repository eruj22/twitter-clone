import React from "react"
import { auth } from "../services/firebase"
import { useHistory } from "react-router-dom"

function SidebarProfileModal({ isProfileModalOpen }) {
  let history = useHistory()

  const signOut = async () => {
    try {
      await auth.signOut()
      history.push("/")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div
      className={
        isProfileModalOpen
          ? `sidebarProfile sidebarProfile--open`
          : `sidebarProfile`
      }
    >
      <div onClick={signOut}>Log Out From Your Profile</div>
      <div className="sidebarProfile__arrow"></div>
    </div>
  )
}

export default SidebarProfileModal
