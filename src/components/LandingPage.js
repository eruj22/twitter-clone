import React from "react"
import TwitterIcon from "@material-ui/icons/Twitter"
import Button from "@material-ui/core/Button"

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage__image">
        <TwitterIcon className="icon--large" />
      </div>
      <div className="landingPage__text">
        <TwitterIcon className="icon--small" />
        <h1>Happening now</h1>
        <h2>Join Twitter today.</h2>
        <div className="landingPage__buttons">
          <Button>Sign Up</Button>
          <Button variant="outlined">Log In</Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
