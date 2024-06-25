import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Form.module.css";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const loginInitialValues = {
  email: "",
  password: "",
};

const registerInitialValues = {
  ...loginInitialValues,
  name: "",
  confirmPassword: "",
};

const BaseForm = ({ children, onSubmit, isRegistrationForm }) => {
  const initialValues = isRegistrationForm
    ? registerInitialValues
    : loginInitialValues;

  const validationSchema = isRegistrationForm
    ? registerValidationSchema
    : loginValidationSchema;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        {isRegistrationForm && (
          <div className={css["form-group"]}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <Field className={css["form-field"]} name="name" type="text" />
            <ErrorMessage
              className={css["error-message"]}
              name="name"
              component="div"
            />
          </div>
        )}
        <div className={css["form-group"]}>
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <Field className={css["form-field"]} name="email" type="email" />
          <ErrorMessage
            className={css["error-message"]}
            name="email"
            component="div"
          />
        </div>
        <div className={css["form-group"]}>
          <label className={css.label} htmlFor="password">
            Password
          </label>
          <Field
            className={css["form-field"]}
            name="password"
            type="password"
          />
          <ErrorMessage
            className={css["error-message"]}
            name="password"
            component="div"
          />
        </div>
        {isRegistrationForm && (
          <div className={css["form-group"]}>
            <label className={css.label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <Field
              className={css["form-field"]}
              name="confirmPassword"
              type="password"
            />
            <ErrorMessage
              className={css["error-message"]}
              name="confirmPassword"
              component="div"
            />
          </div>
        )}
        {children}
      </Form>
    </Formik>
  );
};

export default BaseForm;
