import React, { useState, useEffect } from "react"
import Post from "./Post"
import TweetBox from "./TweetBox"
import { db } from "../services/firebase"
import FlipMove from "react-flip-move"

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    )
  }, [posts])

  return (
    <main className="feed">
      <header className="feed__header">
        <h2>Home</h2>
      </header>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => {
          const { displayName, username, verified, text, image, avatar } = post
          return (
            <Post
              key={text}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              image={image}
              avatar={avatar}
            />
          )
        })}
      </FlipMove>
    </main>
  )
}

export default Feed
