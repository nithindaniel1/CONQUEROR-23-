import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from "../../config/routes";

function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [fees, setFees] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const register = async (e) => {
    setIsLoading(true);

    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(res.user, {
        displayName: name,
      });

      const doctorsRef = doc(db, "doctors", res.user.email);
      await setDoc(doctorsRef, {
        email,
        password,
        department,
        fees,
        name,
      });

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
        <form className="w-[100%] space-y-4" onSubmit={register}>
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
            <label htmlFor="department" className="text-sm font-semibold">
              Department
            </label>
            <TextField
              id="department"
              variant="outlined"
              size="small"
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="fees" className="text-sm font-semibold">
              Fees
            </label>
            <TextField
              id="fees"
              variant="outlined"
              size="small"
              onChange={(e) => {
                setFees(e.target.value);
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
            />
          </div>
          <Button
            variant="contained"
            className="w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading.." : "Sign up"}
          </Button>
          <div className="text-center">
            <p className="text-secondary text-[0.86em]">
              Already have an account?{" "}
              <Button href={LOGIN_PAGE_ROUTE}>
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
