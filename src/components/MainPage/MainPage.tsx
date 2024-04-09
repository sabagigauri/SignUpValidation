import { useFormik } from "formik";
import LeftSide from "../LeftSide/LeftSide";
import RightHeader from "../RightSide/RightHeader/RightHeader";
import SignUpValidationSchema from "../utils/validationSchema";
import RightFooter from "../RightSide/RightFooter/RightFooter";

const MainPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: (values) => {
      localStorage.setItem("users", JSON.stringify(values));
    },
  });

  return (
    <div className="container">
      <div className="SideWrapper">
        <LeftSide />
        {/* <RightHeader /> */}
      </div>
      <section>
        <RightHeader />
        <div className="inputHolder">
          <form onSubmit={formik.handleSubmit} className="inputForm">
            <div className="firstInput">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                type="text"
                placeholder="First Name"
                name="firstName"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="secondInput">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
              ) : null}
            </div>

            <div className="thirdInput">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                placeholder="Email Address"
                name="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="fourthInput">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                type="password"
                placeholder="Password"
                name="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <button type="submit" className="freeTrial">
              CLAIM YOUR FREE TRIAL
            </button>
            <RightFooter />
          </form>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
  