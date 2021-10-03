import React, { useState } from "react"
import { Button, Avatar } from "@material-ui/core"
import { db } from "../services/firebase"
import firebase from "firebase/app"
import noUserImage from "../assets/no-user.jpg"

function TweetBox({ closeTweet, isTweetOpen, user }) {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = (e) => {
    e.preventDefault()

    if (tweetMessage === "") {
      return null
    }

    db.collection("posts").add({
      displayName: user.name,
      username: user.username,
      verified: true,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      text: tweetMessage,
      image: tweetImage,
      avatar: user.image,
    })

    if (isTweetOpen) {
      closeTweet()
    }

    setTweetImage("")
    setTweetMessage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user ? user.image : noUserImage} />
          <input
            type="text"
            placeholder="What is happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button onClick={sendTweet}>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
