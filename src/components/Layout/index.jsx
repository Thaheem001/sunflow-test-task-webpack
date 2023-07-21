/* eslint-disable react/prop-types */
import React, { useState } from "react"
import SideNav from "@components/SideNav"
import { Box, Button } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"
import { ROUTES_PATH } from "@config/routes.config"

const Layout = () => {
  const val = localStorage.getItem("theme")
  const [isDark, setIsDark] = useState(val === "true")
  const navigate = useNavigate()

  return (
    <Box className={`main_layOut  ${isDark && "dark"}`}>
      <Box className="left-box">
        <SideNav {...{ isDark, setIsDark }} />
      </Box>
      <Box className={`right-box `}>
        <Box className="layout-top-box">
          <Button
            variant="outlined"
            className="logout_btn"
            onClick={() => navigate(ROUTES_PATH.LOGIN)}
          >
            Log out
          </Button>
          <Button variant="contained" className="save_changes_btn">
            Save Changes
          </Button>
        </Box>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
