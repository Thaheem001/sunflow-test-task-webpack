/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { nav_links } from "@config/routes.config"
import { Box, Button } from "@mui/material"
import { NavLink } from "react-router-dom"
import UiSwitch from "@components/UiSwitch"

const SideNav = ({ isDark, setIsDark }) => {
  const [open, setOpen] = useState(false)

  const handleDarkMode = () => {
    setIsDark(!isDark)
    localStorage.setItem("theme", !isDark)
  }
  return (
    <Box className={`side-nav ${open ? "show" : "hide"}`}>
      <Box className="nav-links-outer">
        <Button className={`nav-links top-nav-btn `} onClick={() => setOpen((prev) => !prev)}>
          <span className="icon">
            {open ? (
              <i className="fa-solid fa-chevrons-left"></i>
            ) : (
              <i className="fa-solid fa-chevrons-right"></i>
            )}
          </span>
        </Button>
      </Box>
      {nav_links.map((item, i) => (
        <Box key={"nav--links-box" + i} className="nav-links-outer">
          <NavLink to={item.path} className={`nav-links `}>
            <span className="icon">{item.icon}</span>
            <span className="text">{item.name}</span>
          </NavLink>
          {item.child &&
            item.child.map((child, i) => (
              <NavLink to={child.path} key={"child--" + i} className={`nav-links child `}>
                <span className="icon"></span>
                <span className="text">{child.name}</span>
              </NavLink>
            ))}
          {item.custom && (
            <Box className={`nav-links custom`}>
              <span className="icon"></span>
              <span className="text">
                <UiSwitch isDark={isDark} setIsDark={handleDarkMode} />
              </span>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default SideNav
