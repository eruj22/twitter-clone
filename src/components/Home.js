import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"
import firebase from "firebase/app"
import { useStateValue } from "../utils/StateProvider"
import { getFromLocalStorage, saveToLocalStorage } from "../utils/functions"
import { db } from "../services/firebase"

function Home() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue([])
  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const currentUser = firebase.auth().currentUser

  const getUserData = () => {
    db.collection("users")
      .doc(getFromLocalStorage("userId"))
      .onSnapshot((doc) => {
        setUserData(doc.data())
        setIsLoading(false)
      })
  }

  useEffect(() => {
    dispatch({
      type: "SET_USER",
      user: currentUser,
    })

    getUserData()

    saveToLocalStorage("userId", currentUser.uid)
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <div className="home">
      <Sidebar user={userData} />
      <Feed user={userData} />
      <Widgets />
    </div>
  )
}

export default Home
