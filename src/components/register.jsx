import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
const styles = {register:{
  padding: "5px",
  border: "1px black solid",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  width: "200px",
  height: "200px",
  justifyContent: "start",
  gap: "20px",
}}
export default function Rejister() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  function usernameHandle(e) {
    setUser(e.target.value);
  }
  function passwordHandle(e) {
    setPass(e.target.value);
  }
  function registerHandle() {
    postApi(user, pass);
  }
  function postApi(user, pass) {
    const url = "https://rezayari.ir:8000/api/auth/login";
    let data = {
      username: user,
      password: pass,
    };
    // send a POST request
    axios.post(url, data).then(
      (response) => {
        //console.log(response);
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/search");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <div
      className="register"
      style={styles.register}
    >
      <TextField
        onChange={usernameHandle}
        id="filled-basic"
        label="username"
        variant="filled"
      />
      <TextField
        onChange={passwordHandle}
        id="filled-basic"
        label="password"
        variant="filled"
      />
      <Button onClick={registerHandle} variant="contained">
        Rergister
      </Button>
    </div>
  );
}
