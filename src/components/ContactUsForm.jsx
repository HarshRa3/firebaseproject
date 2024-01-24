import React from "react";
import {getDatabase, ref,set} from 'firebase/database'
import { useFormik } from "formik";
import { Button, Stack, TextField, Typography } from "@mui/material";
import app from "../firebase/firebase";
const db=getDatabase(app)
const ContactUsForm = () => {
    const putData=(data)=>{
        set(ref(db,'user'),data)
    }
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      EmailAddress: "",
      PhoneNumber: "",
      Message: "",
    },
    onSubmit: async(values) => {
    //    writeUserData(values)
        // const data=await createUserWithEmailAndPassword(db,values.EmailAddress,values.LastName)
        // console.log(data)
        formik.resetForm()
        putData(values);
    },
    
  });
//   function writeUserData(data) {
    
//     set(ref(db, 'users'), data);
//   }

  return (
    <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
      <Stack spacing={3} sx={{ width: "70%", m: "20px auto" }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Contact Us
        </Typography>
        <Stack direction={{ lg: "row", xs: "column" }} spacing={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={formik.values.FirstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="FirstName"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={formik.values.LastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="LastName"
          />
        </Stack>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={formik.values.EmailAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="EmailAddress"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Mobile"
          variant="outlined"
          value={formik.values.PhoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="PhoneNumber"
          type="tel"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="About"
          variant="outlined"
          value={formik.values.Message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="Message"
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default ContactUsForm;
