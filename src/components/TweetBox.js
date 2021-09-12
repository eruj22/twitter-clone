import React, { useState } from "react"
import { Button, Avatar } from "@material-ui/core"
import { db } from "../services/firebase"
import firebase from "firebase"

function TweetBox({ closeTweet, isTweetOpen }) {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection("posts").add({
      displayName: "Jure Prnaver",
      username: "eruj22",
      verified: true,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://byuc.files.wordpress.com/2012/07/avat-2.jpg",
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
          <Avatar src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg" />
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
