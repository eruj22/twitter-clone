import React from "react"
import "./style/main.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Footer from "./components/Footer"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* add dynamic route to each user */}
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
