import { Formik, Field, Form, ErrorMessage } from "formik";

const FORM_INTIAL_VALUES = {
  Name: "",
  emailId: "",
  phoneNumber: "",
  password: "",
  
};

const submit = () => {
    console.log("submited")
}

function JobAppFormik() {
  return (
    <div className="needs-validation">
     
      <br />
      <Formik
        initialValues={FORM_INTIAL_VALUES}
        validate={(form) => ({
          Name: !form.Name ? "Name is required" : "",
          emailId: !form.emailId ? "Email is required" : "",
          phoneNumber: !form.phoneNumber ? "Phone Number is required" : "",
          password: !form.password ? "Password is required" : ""
         
        })}
        onSubmit={(form) => {
          console.log(form);
        }}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <Field
                className="form-control"
                name="Name"
                type="text"
                
              />
              <ErrorMessage
                name="Name"
                component="span"
                className="text-danger"
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="emailId">Email Id</label>
              <Field
                className="form-control"
                name="emailId"
                type="email"
                
              />
              <ErrorMessage
                name="emailId"
                component="span"
                className="text-danger"
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field
                className="form-control"
                name="phoneNumber"
                
                type = "number"
              >
                
              </Field>
              <ErrorMessage
                name="phoneNumber"
                component="span"
                className="text-danger"
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="text"
                name="password"
                className="form-control"
               
              />
              <ErrorMessage
                name="password"
                component="span"
                className="text-danger"
              />
            </div>
            {/* <br />
            <div className="form-group">
              <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
            </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default JobAppFormik;
