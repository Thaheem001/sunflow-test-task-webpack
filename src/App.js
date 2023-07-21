import React from "react"
import { ROUTER_PATH } from "@config/routes.config"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "@components/Layout"
import Login from "@routes/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/login"} element={<Login />} exact />
        <Route element={<Layout />}>
          {ROUTER_PATH.map(
            (route, index) =>
              !route.local && <Route key={index} path={route.path} element={route.element} exact />
          )}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
