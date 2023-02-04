import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { SIGNUP_ROUTE } from "../../config/routes";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../../config/firebase"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
      }
    }
    return isValid;
  };


  const login = (e) => {
    console.log("clicked")
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
      console.log("verified")

      }
      )
      .catch((err) => console.error(err.message));
  };

console.log(email)
console.log(password)

  return (
    <main className="bg-disabled min-h-screen flex justify-center items-center">
      <div className="rounded-xl bg-white w-[40%] flex justify-center items-center flex-col space-y-4 p-16">
        <form className="w-[100%] space-y-4" onSubmit={login}>
          <h1 className="font-[500] text-primary text-3xl">Welcome back</h1>
          <h1 className="text-secondary mt-2">
            Welcome back! Please enter your details
          </h1>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <TextField
              id="email"
              variant="outlined"
              type="email"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <TextField
              id="password"
              variant="outlined"
              type="password"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button variant="contained" className="w-full" type="submit">
            Sign in
          </Button>
          <div className="text-center">
            <p className="text-secondary text-[0.86em]">
              Don't have an account?{" "}
              <Button href={SIGNUP_ROUTE}>
                <label className="font-[600] text-[0.88em]">Sign up</label>
              </Button>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
