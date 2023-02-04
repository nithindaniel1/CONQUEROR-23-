import { Button, MenuItem, Select, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";

function AppointmentFormPage() {
  const [date, setDate] = useState(dayjs(new Date()));
  const [fullName, setfullName] = useState("");
  const [age, setage] = useState(0);
  const [number, setnumber] = useState(0);
  const [doctor, setdoctor] = useState("");
  const [fee, setfee] = useState(0);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "doctors")).then((res) => {
      setDoctors(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const appointmentDocs = await getDocs(
        collection(db, "doctors", doctor, "appointments")
      );
      const currentUser = JSON.parse(localStorage.getItem("user"));
      await setDoc(
        doc(db, "doctors", doctor, "appointments", currentUser.email),
        {
          fullName: fullName,
          age: age,
          number: number,
          doctor: doctor,
          appointmentDate: date.toDate(),
          doctorFee: fee,
          tokenNumber: appointmentDocs.docs.length + 1,
        }
      );
      await addDoc(
        collection(db, "patients", currentUser.email, "appointments"),
        {
          fullName: fullName,
          age: age,
          number: number,
          doctor: doctor,
          appointmentDate: date.toDate(),
          doctorFee: fee,
          tokenNumber: appointmentDocs.docs.length + 1,
        }
      );
      alert("inserted successfully");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <main className="bg-disabled min-h-screen flex justify-center items-center p-16">
      <div className="rounded-xl bg-white w-[60%] flex justify-center items-center flex-col space-y-4 p-16">
        <form className="w-[100%] space-y-4" onSubmit={handleSubmit}>
          <h1 className="font-[500] text-primary text-3xl text-center mb-5">
            Appointment Form
          </h1>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="fullName" className="text-sm font-semibold">
              Full Name
            </label>
            <TextField
              id="fullName"
              variant="outlined"
              size="small"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="age" className="text-sm font-semibold">
              Age
            </label>
            <TextField
              id="age"
              variant="outlined"
              size="small"
              type="number"
              onChange={(e) => setage(e.target.value)}
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="phoneNumber" className="text-sm font-semibold">
              Phone Number
            </label>
            <TextField
              id="phoneNumber"
              variant="outlined"
              size="small"
              type="tel"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label
              htmlFor="department-select-label"
              className="text-sm font-semibold"
            >
              Doctor
            </label>
            <Select
              labelId="department-select-label"
              id="department-select"
              size="small"
              value={doctor}
              onChange={(e) => {
                setdoctor(e.target.value);
              }}
            >
              {doctors.map((doctor) => {
                return (
                  <MenuItem value={doctor.id} key={doctor.id}>
                    {doctor.name + ", " + doctor.department}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="appointmentDate" className="text-sm font-semibold">
              Appointment Date
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                value={date}
                onChange={setDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          <div className="space-y-1 flex flex-col">
            <label htmlFor="doctorfee" className="text-sm font-semibold">
              Doctor Fee
            </label>
            <TextField
              id="doctorfee"
              variant="outlined"
              size="small"
              value={fee}
              onChange={(e) => setfee(e.target.value)}
            />
          </div>
          <Button variant="contained" className="w-full" type="submit">
            Pay
          </Button>
        </form>
      </div>
    </main>
  );
}

export default AppointmentFormPage;
