import { Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { HOME_PAGE_ROUTE, SIGNUP_PAGE_ROUTE } from "../../config/routes";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async (e) => {
    setIsLoading(true);

    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      localStorage.setItem("user", JSON.stringify(res.user));

      setIsLoading(false);

      navigate(HOME_PAGE_ROUTE);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-disabled min-h-screen flex justify-center items-center">
      <div className="rounded-xl bg-white w-[40%] flex justify-center items-center flex-col space-y-4 p-16">
        <form className="w-[100%] space-y-4" onSubmit={login}>
          <h1 className="font-[500] text-primary text-3xl">Welcome Back</h1>
          <h1 className="text-secondary mt-2">
            Welcome back! Please enter your details to continue
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
          <Button
            variant="contained"
            className="w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading.." : "Sign in"}
          </Button>
          <div className="text-center">
            <p className="text-secondary text-[0.86em]">
              Don't have an account?{" "}
              <Button href={SIGNUP_PAGE_ROUTE}>
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
