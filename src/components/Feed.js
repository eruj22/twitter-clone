import React, { useState, useEffect } from "react"
import Post from "./Post"
import TweetBox from "./TweetBox"
import { db } from "../services/firebase"
import FlipMove from "react-flip-move"

function Feed({ user }) {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    await db
      .collection("posts")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()).reverse())
      })
  }

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="feed">
      <header className="feed__header">
        <h2>Home</h2>
      </header>
      <TweetBox user={user} />

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
