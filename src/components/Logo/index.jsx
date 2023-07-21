import React from "react"
import { ROUTES_PATH } from "../../config/routes.config"
import { Link } from "react-router-dom"
import { Box } from "@mui/material"
import logoImage from "@assets/images/logo.png"

const Logo = () => {
  return (
    <Box className="login_box">
      <strong>
        <Link to={ROUTES_PATH.DASHBOARD}>
          <img src={logoImage} alt="logo_main" className="logo" />
        </Link>
      </strong>
    </Box>
  )
}

export default Logo
