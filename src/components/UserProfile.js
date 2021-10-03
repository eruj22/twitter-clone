import React, { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import Widgets from "./Widgets"
import User from "./User"
import { getFromLocalStorage } from "../utils/functions"
import { db } from "../services/firebase"

function UserProfile() {
  const [userData, setUserData] = useState([])

  const getUserData = () => {
    db.collection("users")
      .doc(getFromLocalStorage("userId"))
      .onSnapshot((doc) => {
        setUserData(doc.data())
      })
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className="home">
      <Sidebar user={userData} />
      <User />
      <Widgets />
    </div>
  )
}

export default UserProfile
