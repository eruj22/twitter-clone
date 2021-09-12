import React, { useState, useEffect } from "react"
import Post from "./Post"
import TweetBox from "./TweetBox"
import { db } from "../services/firebase"
import FlipMove from "react-flip-move"
import { useStateValue } from "../utils/StateProvider"
import firebase from "firebase"

function Feed() {
  const [state, dispatch] = useStateValue()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()).reverse())
      })
    dispatch({
      type: "SET_USER",
      user: firebase.auth().currentUser,
    })
    // TODO: when the feed will refresh
  }, [])

  return (
    <main className="feed">
      <header className="feed__header">
        <h2>Home</h2>
      </header>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => {
          const {
            displayName,
            username,
            verified,
            text,
            image,
            avatar,
            createdAt,
          } = post
          return (
            <Post
              key={text}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              image={image}
              avatar={avatar}
              createdAt={createdAt}
            />
          )
        })}
      </FlipMove>
    </main>
  )
}

export default Feed
