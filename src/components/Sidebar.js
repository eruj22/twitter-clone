import React, { useState } from "react"
import SidebarOption from "./SidebarOption"
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import ListAltIcon from "@material-ui/icons/ListAlt"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import Button from "@material-ui/core/Button"
import { Avatar } from "@material-ui/core"
import TweetModal from "./TweetModal"
import SidebarProfileModal from "./SidebarProfileModal"

function Sidebar() {
  const [isTweetOpen, setIsTweetOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  const openTweet = () => {
    setIsTweetOpen(true)
  }

  const openProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen)
  }

  return (
    <>
      <aside className="sidebar">
        <div>
          <TwitterIcon className="sidebar__twitterIcon" />

          <SidebarOption active Icon={HomeIcon} text="Home" link={"home"} />
          <SidebarOption Icon={SearchIcon} text="Explore" />
          <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
          <SidebarOption Icon={MailOutlineIcon} text="Messages" />
          <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
          <SidebarOption Icon={ListAltIcon} text="Lists" />
          <SidebarOption
            Icon={PermIdentityIcon}
            text="Profile"
            link={"home/user"}
          />
          <SidebarOption Icon={MoreHorizIcon} text="More" />

          <Button
            className="cta cta--full"
            variant="outlined"
            fullWidth
            onClick={openTweet}
          >
            Tweet
          </Button>
        </div>

        <div>
          <button
            className="cta sidebar__profileText"
            onClick={openProfileModal}
          >
            <Avatar src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg" />
            <h3>
              Jure Prnaver <span className="post__headerSpecial">@eruj22</span>
            </h3>
            <MoreHorizIcon />
            <SidebarProfileModal isProfileModalOpen={isProfileModalOpen} />
          </button>
        </div>
      </aside>
      <TweetModal isTweetOpen={isTweetOpen} setIsTweetOpen={setIsTweetOpen} />
    </>
  )
}

export default Sidebar
