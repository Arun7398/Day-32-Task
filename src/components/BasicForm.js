import React from "react";

export function BasicForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        type="email"
        placeholder="Enter your email"
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}

      <input
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="text"
        placeholder="Enter your password"
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : null}
      <button type="submit">Submit</button>

      <div>
        Error
        <pre>{JSON.stringify(formik.errors)}</pre>
        Touched
        <pre>{JSON.stringify(formik.touched)}</pre>
      </div>
    </form>
  );
}
