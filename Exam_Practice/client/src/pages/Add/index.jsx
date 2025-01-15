import React from 'react'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
import { BASE_URL, endpoints } from '../../constants/constants';
import axios from 'axios';
 
 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   description: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   imgUrl: Yup.string().url().required('Required'),
   price: Yup.number().required('Required'),
 });

const Add = () => {
  return (
    <>
     <Helmet>
        <title>Add Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <h1>Add Product</h1>
     <Formik
       initialValues={{
         name: '',
         description: '',
         imgUrl: '',
         price:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        const addData = async () => {
          await axios.post(`${BASE_URL}/${endpoints.shoes}`,values);
      }
      addData();
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="name" placeholder = {"Name"}/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="description" placeholder = {"Description"}/>
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           <Field name="price" type = "number" placeholder = {"Price"}/>
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <Field name="imgUrl" type = "url"placeholder = {"ImgUrl"} />
           {errors.imgUrl && touched.imgUrl ? <div>{errors.imgUrl}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </>
  )
}

export default Add