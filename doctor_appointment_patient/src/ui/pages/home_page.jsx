import { Button, Card, CardContent, IconButton } from "@mui/material";
import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import {
  APPOINTMENT_DETAILS_ROUTE,
  APPOINTMENT_FORM_ROUTE,
} from "../../config/routes";

function HomePage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    getDocs(collection(db, "patients", currentUser.email, "appointments")).then(
      (res) => {
        setAppointments(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
  }, []);

  return (
    <main className="bg-disabled min-h-screen flex justify-center p-16">
      <div className="rounded-xl bg-white w-[80%] flex items-center flex-col p-16 min-h-[50vh]">
        <div className="text-center">
          <p className="text-secondary text-[0.82em]">
            Press the below button to book an
            <br /> appointment with doctor
          </p>
          <Link to={APPOINTMENT_FORM_ROUTE}>
            <IconButton color="primary">
              <IoAddCircleOutline size={35} />
            </IconButton>
          </Link>
        </div>
        <div className="mt-8 w-full flex flex-col space-y-3 items-center">
          {appointments.map((appointment) => {
            return (
              <Card
                style={{ width: "70%" }}
                variant="outlined"
                key={appointment.id}
              >
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">
                    {appointment.doctor}
                  </h3>
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-secondary text-sm">
                        Date:{" "}
                        {appointment.appointmentDate.toDate().toISOString()}
                      </p>
                      <p className="text-secondary text-sm">
                        Token No: {appointment.tokenNumber}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button variant="contained" size="small">
                      <Link
                        to={APPOINTMENT_DETAILS_ROUTE}
                        state={{
                          appointment: appointment,
                        }}
                      >
                        View Appointment
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
