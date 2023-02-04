import { Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import { PRESCRIPTION_PAGE_ROUTE } from "../../config/routes";

function HomePage() {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "doctors", currentUser.email, "appointments")).then(
      (res) => {
        setAppointments(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
  }, []);

  const columns = [
    { field: "tokenNumber", headerName: "Token Number", width: 150 },
    {
      field: "fullName",
      headerName: "Name",
      width: 250,
    },
    {
      field: "age",
      headerName: "Age",
      width: 110,
    },
    {
      field: "number",
      headerName: "Phone Number",
      width: 250,
    },
    {
      field: "id",
      headerName: "Email",
      width: 250,
    },
    {
      field: "prescription",
      headerName: "Prescription",
      width: 250,
      renderCell: (params) => {
        return (
          <Link
            to={PRESCRIPTION_PAGE_ROUTE}
            state={{
              appointment: appointments.filter((item) => item.id === params.id),
            }}
          >
            <Button variant="contained" size="small">
              Enter Prescription
            </Button>
            {/* <Button variant="contained" size="small" color="success" disabled startIcon={ <IoIosDoneAll />}>
            Uploaded
          </Button> */}
          </Link>
        );
      },
    },
  ];

  return (
    <main className="bg-disabled min-h-screen flex justify-center py-12">
      <div className="rounded-xl bg-white w-[90%] flex flex-col p-10 min-h-[50vh] space-y-4">
        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">Dr. {currentUser.displayName}</h4>
            <p className="text-secondary text-sm"></p>
          </div>
          <IconButton color="primary" component="label">
            <IoMdLogOut />
          </IconButton>
        </div>
        <DataGrid
          rows={appointments}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </div>
    </main>
  );
}

export default HomePage;
