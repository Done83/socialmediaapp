import { useFormik } from 'formik';
import * as Yup from 'yup';

import image from '../../assets/register_image.png';
import { FileParser } from '../../utils/fileParser';

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      image: '',
      birthDate: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(5, 'At least 5 characters')
        .required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      image: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);

      FileParser(values.image)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      formik.resetForm();
    },
  });
  return (
    <section className="register-page">
      <div className="left w-[45%] my-20">
        <img src={image} alt="" />
      </div>
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
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <input
              type="email"
              id="email"
              placeholder="Email:"
              className="input-field"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <input
              type="password"
              id="password"
              placeholder="Password:"
              className="input-field"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <input
              type="file"
              name="image"
              className="border w-[90%] h-[45px]"
              onChange={(e) => {
                formik.setFieldValue(e.target.name, e.target.files[0]);
              }}
            />

            <input
              type="date"
              name="birthDate"
              className="input-field"
              {...formik.getFieldProps('birthDate')}
            />

            <select
              name="gender"
              id=""
              className="input-field"
              {...formik.getFieldProps('gender')}
            >
              <option value="" defaultChecked>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

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
