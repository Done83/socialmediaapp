import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      username: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(5, 'At least 5 characters')
        .required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values.firstName);
      formik.resetForm();
    },
  });
  return (
    <section className="register-page">
      <div className="left w-[45%] my-20">Image</div>
      <div className="right w-[45%] flex flex-col my-16 gap-5">
        <div className="register-title">
          <h2>REGISTER</h2>
        </div>
        <div>
          <form
            action=""
            className="register-form"
            onSubmit={formik.handleSubmit}
          >
            <input
              type="text"
              id="firstName"
              placeholder="First name:"
              className="input-field"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <input
              type="text"
              id="lastName"
              placeholder="Last name:"
              className="input-field"
              {...formik.getFieldProps('lastName')}
            />
            <input
              type="email"
              id="email"
              placeholder="Email:"
              className="input-field"
              {...formik.getFieldProps('email')}
            />
            <input
              type="password"
              id="password"
              placeholder="Password:"
              className="input-field"
              {...formik.getFieldProps('password')}
            />
            <input
              type="text"
              id="username"
              placeholder="Username:"
              className="input-field"
              {...formik.getFieldProps('username')}
            />
            <button type="submit" className="button w-[90%] mb-2">
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default RegisterPage;
