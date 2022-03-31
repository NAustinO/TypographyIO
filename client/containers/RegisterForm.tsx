import React, {useState, useEffect} from "react";
import { Link as RouterLink } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import '../stylesheets/styles.css';
import { useNavigate } from "react-router"
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
import { VisibilityOffTwoTone, VisibilityTwoTone } from "@mui/icons-material";
import { PeopleAltTwoTone } from "@mui/icons-material";


const RegisterForm = (props: any) => {
  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '', 
    email: '', 
    password: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }


  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // }

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // }

  // const handleSubmit = (event) => {
  //   // validating user input 
  //   if (username.length < 5) { 
  //     alert('Username must be more than 5 characters');
  //     return;
  //   };
  //   if (password.length < 5) { 
  //     alert('Password must be more than 5 characters');
  //     return;
  //   }

  //   let userInfo = {username: username, password: password};
  
  //   fetch('/api/register', {
  //     method: 'POST', 
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userInfo),
  //   })
  //     .then(response => {
  //       window.alert('Successfully created user. Redirecting to homepage');
  //       navigate('/')
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     }) 
  // }


  return (
    <Container component={'main'} maxWidth='xs' >
      <CssBaseline />
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        rowGap: '1em',
        position: 'fixed',
        left: '25%', 
        right: '25%',
        bottom: '25%',
        top: '25%'
      }}>
        <Avatar >
          <PeopleAltTwoTone/>
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField 
                autoComplete="fname"
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                onChange={(e) => { setForm({...form, firstName: e.target.value})}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => { setForm({...form, lastName: e.target.value})}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type='email'
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => { setForm({...form, email: e.target.value })}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                helperText={
                  `Must contain at least 10 characters and at least 3 of the following: 
                  uppercase, lowercase, numeric, or special characters.`
                }
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => { setForm({...form, password: e.target.value })}}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button // assign className
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justifyContent={'space-evenly'} >
            <Grid item >
              {/* <Button variant='outlined' > */}
                <RouterLink to='/login'>
                  Already have an account? Sign in
                </RouterLink>
              {/* </Button> */}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
} 

export default RegisterForm;

