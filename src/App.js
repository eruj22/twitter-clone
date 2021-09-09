import React from "react"
import "./style/main.scss"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Widgets from "./components/Widgets"
import { auth } from "./services/firebase"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <div className="home">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
