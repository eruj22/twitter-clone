import React from "react"
import TwitterIcon from "@material-ui/icons/Twitter"
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <section className="landingPage">
      <div className="landingPage__image">
        <TwitterIcon className="icon--large" />
      </div>
      <div className="landingPage__text">
        <TwitterIcon className="icon--small" />
        <h1>Happening now</h1>
        <h2>Join Twitter today.</h2>
        <div className="landingPage__buttons">
          <Link to="/signup" className="cta cta--full cta--limited">
            Sign Up
          </Link>
          <Link to="/login" className="cta cta--empty cta--limited">
            Log In
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
