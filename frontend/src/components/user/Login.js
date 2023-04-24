import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import backImg from "../../assets/img/backimg.png";
import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { customFetch } from "../custom/customFetch";

const Login = ({ handleLogin }) => {
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser();
  };

  // user login
  const loginUser = async () => {
    const data = {
      id: document.getElementById("id").value,
      password: sha256(document.getElementById("password").value),
    };
    const response = await customFetch("/api/sign/login", {
      method: "post",
      body: JSON.stringify(data),
    });
    const jwtToken = response.headers
      .get("Authorization")
      .replace("Bearer ", "");

    console.log("login success!!!!!");
    alert("login success!!!!!");

    handleLogin(jwtToken, (await response.json()).data);
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 0,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={10}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ marginLeft: 5 }}
          >
            <Box
              sx={{
                my: 5,
                mx: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={logo}
                sx={{ height: "90px", width: "100px" }}
              />
              {/* <Typography component="h1" variant="h5"> */}
              <Typography
                variant="h5"
                color="#0573FC"
                sx={{ paddingTop: 3, fontFamily: "Black Han Sans, sans-serif" }}
              >
                SMARTLOGISTICS
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  size="small"
                  margin="normal"
                  required
                  fullWidth
                  id="id"
                  label="id"
                  name="id"
                  autoComplete="id"
                  autoFocus
                />
                <TextField
                  size="small"
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
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item></Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid xs={false} sx={{ zIndex: -2 }}>
            <Box sx={{ marginLeft: "300px", marginTop: "-515px" }}>
              <Box
                component="img"
                src={backImg}
                sx={{
                  width: "500px",
                  height: "550px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
