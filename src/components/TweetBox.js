import { Button, Avatar } from "@material-ui/core"
import React from "react"

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg" />
          <input type="text" placeholder="What is happening?" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
