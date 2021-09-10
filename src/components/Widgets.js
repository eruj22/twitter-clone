import React from "react"
import {
  TwitterTimelineEmbed,
  // TwitterShareButton,
  // TwitterTweetEmbed,
} from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
  return (
    <aside className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        {/* <TwitterTweetEmbed tweetId={"858551177860055040"} /> */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
        {/* <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        /> */}
      </div>
    </aside>
  )
}

export default Widgets
