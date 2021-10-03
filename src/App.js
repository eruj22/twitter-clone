import React from "react"
import "./style/main.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Footer from "./components/Footer"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"

// TODO: display time for every feed based on current time
// TODO: add working buttons for every post (comment, like)
// TODO: change active class in the sidebar menu

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/home/user">
            <UserProfile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <LandingPage />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
