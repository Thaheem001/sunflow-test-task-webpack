import React from "react"
import Logo from "@components/Logo"
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography
} from "@mui/material"
import img from "@assets/images/login_bg.png"

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Box className="main_login">
      <Box className="left_box">
        <Box className="top">
          <Logo />
        </Box>
        <Box className="bottom" variant="form">
          <Typography variant="h6">Log in to your account</Typography>
          <form autoComplete="off" action="/">
            <OutlinedInput
              placeholder="Username"
              className="user_input"
              type="text"
              startAdornment={
                <InputAdornment position="start">
                  <i className="fa-light fa-user"></i>
                </InputAdornment>
              }
            />
            <OutlinedInput
              placeholder="Password"
              className="password_input"
              type={showPassword ? "text" : "password"}
              startAdornment={
                <InputAdornment position="start">
                  <i className="fa-light fa-lock"></i>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    className="eye-icon"
                    onClick={() => setShowPassword((show) => !show)}
                    onMouseDown={(event) => event.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? (
                      <i className="fa-light fa-eye-slash"></i>
                    ) : (
                      <i className="fa-light fa-eye"></i>
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormControlLabel
              className="checkbox"
              control={<Checkbox defaultChecked style={{ color: "#e84d3e" }} />}
              label="Keep me logged in "
            />
            <Button variant="contained" className="login_btn" type="submit">
              Login
            </Button>
          </form>
        </Box>
      </Box>
      <Box className="right_box" style={{ backgroundImage: `url(${img})` }}></Box>
    </Box>
  )
}

export default Login
