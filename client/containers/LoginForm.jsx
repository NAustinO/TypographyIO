import React from "react";
import styled from "styled-components";
import { 
  CssBaseline, 
  Paper, 
  Avatar,
  FormControl,
  Input,
  Button, 
  TextField, 
  FormControlLabel,
  Checkbox,
  Link,
  Grid, 
  Box, 
  Typography,
  Container,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

const LoginForm = () => {
  return (
    <Grid container component="main" >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}  />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div>
          <Avatar >
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}


export default LoginForm;