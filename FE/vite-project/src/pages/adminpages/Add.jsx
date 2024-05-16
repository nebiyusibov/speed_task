import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Add() {
  return (
    <Formik
    initialValues={{ name: '', price: '' }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      price: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    })}
    onSubmit={(values) => {
      
  async function getUser() {
       const res= await fetch("http://localhost:3000/user",
       {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(values) }
       )
       const data=await res.json()
       console.log(data);
   }
   getUser()
    }}
  >
    <Form>
      <label htmlFor="name"> Name</label> <br />
      <Field name="name" type="text" />
      <ErrorMessage name="name" /> <br /> <br />

      <label htmlFor="price">price </label> <br />
      <Field name="lastName" type="text" />
      <ErrorMessage name="lastName" /> <br /> <br />

      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}

export default Add