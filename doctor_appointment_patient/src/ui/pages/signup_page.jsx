import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { LOGIN_ROUTE } from "../../config/routes";

function SignupPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const signup = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return;
    }

    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, {
      displayName: name,
    });
  };

  return (
    <main className="bg-disabled min-h-screen flex justify-center items-center">
      <div className="rounded-xl bg-white w-[40%] flex justify-center items-center flex-col space-y-4 p-16">
        <form className="w-[100%] space-y-4" onSubmit={signup}>
          <h1 className="font-[500] text-primary text-3xl">Create Account</h1>
          <h1 className="text-secondary mt-2">Sign up for new account</h1>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="fullName" className="text-sm font-semibold">
              Full Name
            </label>
            <TextField
              id="fullName"
              variant="outlined"
              size="small"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <TextField
              id="email"
              variant="outlined"
              type="email"
              size="small"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm font-semibold">
              Confirm Password
            </label>
            <TextField
              id="confirmPassword"
              variant="outlined"
              type="password"
              size="small"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <Button variant="contained" className="w-full" type="submit">
            Sign up
          </Button>
          <div className="text-center">
            <p className="text-secondary text-[0.86em]">
              Already have an account?{" "}
              <Button href={LOGIN_ROUTE}>
                <label className="font-[600] text-[0.88em]">Sign in</label>
              </Button>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignupPage;
