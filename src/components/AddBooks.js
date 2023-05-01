import React from "react";

function AddBooks(props) {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      stock: "",
      status: ""
    },
    validationSchema: formValidationSchema,
    onSubmit: (newData) => {
      console.log(newData);
      submit(newData);
    }
  });

  let navigate = useNavigate();

  let submit = (newData) => {
    let data = [...props.data.library];
    data.push(newData);
    props.data.setLibrary(data);
    navigate("/dashboard");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto col-10">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book Name"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <p style={{ color: "red" }}>
          {touched.title && errors.title ? errors.title : null}
        </p>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author name"
            name="author"
            value={values.author}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <p style={{ color: "red" }}>
          {touched.author && errors.author ? errors.author : null}
        </p>

        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Genre"
            name="genre"
            value={values.genre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <p style={{ color: "red" }}>
          {touched.genre && errors.genre ? errors.genre : null}
        </p>

        <Form.Group className="mb-3">
          <Form.Label>Howmany books</Form.Label>
          <Form.Control
            type="Number"
            placeholder="Enter books count"
            name="stock"
            value={values.stock}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <p style={{ color: "red" }}>
          {touched.stock && errors.stock ? errors.stock : null}
        </p>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Available/ Checked Out"
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <p style={{ color: "red" }}>
          {touched.status && errors.status ? errors.status : null}
        </p>

        <Button type="submit" variant="primary">
          Add to library
        </Button>
      </form>
    </>
  );
}

export default AddBooks;
