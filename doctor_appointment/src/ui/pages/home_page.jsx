import { Button, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { PRESCRIPTION_PAGE_ROUTE } from "../../config/routes";

function HomePage() {
  const columns = [
    { field: "tokenNumber", headerName: "Token Number", width: 150 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      width: 110,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 250,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "prescription",
      headerName: "Prescription",
      width: 250,
      renderCell: (params) => (
        <Link to={PRESCRIPTION_PAGE_ROUTE}>
          <Button variant="contained" size="small">
            Enter Prescription
          </Button>
          {/* <Button variant="contained" size="small" color="success" disabled startIcon={ <IoIosDoneAll />}>
            Uploaded
          </Button> */}
        </Link>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 1243,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 431,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 15,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 2351,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 51,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 23421,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
    {
      id: 541,
      tokenNumber: 1,
      name: "Snow",
      gender: "Jon",
      age: 35,
      phoneNumber: "Jon",
      email: "Jon",
    },
  ];

  return (
    <main className="bg-disabled min-h-screen flex justify-center py-12">
      <div className="rounded-xl bg-white w-[90%] flex flex-col p-10 min-h-[50vh] space-y-4">
        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">Dr. Koottakaaran</h4>
            <p className="text-secondary text-sm">
              Gynocologist, sex consultant
            </p>
          </div>
          <IconButton color="primary" component="label">
            <IoMdLogOut />
          </IconButton>
        </div>
        <DataGrid
          rows={rows}
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
