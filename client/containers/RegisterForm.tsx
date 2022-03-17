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
  makeStyles
} from "@mui/material";
import { VisibilityOffTwoTone, VisibilityTwoTone } from "@mui/icons-material";
import { PeopleAltTwoTone } from "@mui/icons-material";

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   }
// }));


const RegisterForm = (props: any) => {
  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  // const classes = useStyles;


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
      <div>
        <Avatar >
          <PeopleAltTwoTone/>
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form noValidate>
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
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
          <Grid >
            <Grid item>
          
              <RouterLink to='/login'>
                Already have an account? Sign in
              </RouterLink>
  
            </Grid>
          </Grid>
        </form>

      </div>
    </Container>
  )
} 

export default RegisterForm;

