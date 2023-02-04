import { Button, Divider, TextField } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.png";
import { PRIMARY_COLOR } from "../../config/colors";

function PrescriptionPage() {
  return (
    <main className="bg-disabled min-h-screen flex justify-center items-center">
      <div className="rounded-xl bg-white w-[65%] flex justify-center items-center flex-col space-y-4 p-10">
        <div className="w-[100%] space-y-4">
          <div className="flex justify-between">
            <img src={logo} alt="logo" className="w-[80px] h-[80px]" />
            <div>
              <h4 className="font-semibold text-3xl mb-2">Hospital Name</h4>
              <h4 className="font-semibold">Dr. Koottakaaran</h4>
              <p className="text-secondary text-sm">
                Gynocologist, sex consultant
              </p>
            </div>
          </div>
          <Divider color={PRIMARY_COLOR} />
          <p className="text-sm text-primary">
            Token No. <span className="font-semibold">12</span>
          </p>
          <div>
            <div className="flex items-end space-x-2">
              <p className="text-sm text-primary">Name: </p>
              <div className="w-[55%] text-center">
                <p className="text-sm font-semibold">
                  sdfjkdsfdsfsdjlkfdsflks sfdjkll
                </p>
                <Divider color="black" />
              </div>
              <p className="text-sm text-primary">Age: </p>
              <div className="w-[15%] text-center">
                <p className="text-sm font-semibold">20</p>
                <Divider color="black" />
              </div>
              <p className="text-sm text-primary">Sex: </p>
              <div className="w-[15%] text-center">
                <p className="text-sm font-semibold">20</p>
                <Divider color="black" />
              </div>
              <p className="text-sm text-primary">Date: </p>
              <div className="w-[15%] text-center">
                <p className="text-sm font-semibold">20</p>
                <Divider color="black" />
              </div>
            </div>
            <div className="mt-3 min-h-[50vh]">
              <TextField variant="outlined" multiline fullWidth minRows={15} />
            </div>
            <div className="mt-2 text-right">
              <Button variant="contained" size="small">
                Upload
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrescriptionPage;
