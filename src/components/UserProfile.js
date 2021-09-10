import React from "react"
import Sidebar from "./Sidebar"
import Widgets from "./Widgets"
import User from "./User"

function UserProfile() {
  return (
    <div className="home">
      <Sidebar />
      <User />
      <Widgets />
    </div>
  )
}

export default UserProfile
