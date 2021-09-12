import React from "react"
import TweetBox from "./TweetBox"
import CloseIcon from "@material-ui/icons/Close"

function TweetModal({ isTweetOpen, setIsTweetOpen }) {
  const closeTweet = () => {
    setIsTweetOpen(false)
  }
  return (
    <div className={isTweetOpen ? `tweetModal tweetModal--open` : `tweetModal`}>
      <div className="tweetModal__container">
        <div className="tweetModal__header">
          <button className="tweetModal__icon" onClick={closeTweet}>
            <CloseIcon />
          </button>
        </div>
        <TweetBox closeTweet={closeTweet} isTweetOpen={isTweetOpen} />
      </div>
    </div>
  )
}

export default TweetModal
