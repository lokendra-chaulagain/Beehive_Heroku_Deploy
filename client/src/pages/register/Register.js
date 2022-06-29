import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { AuthContext } from "../../context/authContext/AuthContext";
import React, { useContext } from "react";
import { registerSchema } from "./formValidationSchema";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../../config";
const { useFormik } = require("formik");

function Register() {
  //Register
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    // console.log("submitted");
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      await new Promise((resolve) => setTimeout(resolve, 500)); //wait 0.5 sec

      await axiosInstance.post("/userDetails/create", {
        userID: res.data._id,
        fullName: res.data.username,
      });
      actions.resetForm();
      navigate("/");
      toast.success("Login Successful", { theme: "colored" });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="registerPage">
      <div className="rp-Wrapper">
        <div className="rp-Left">
          <div className="rp-LeftRow1">
            <img className="rp-logo" src="assets/logo.svg" alt="" />
          </div>

          <form className="rp-loginContainer" onSubmit={handleSubmit}>
            <img className="rp-logoIcon" src="assets/logo-icon.svg" alt="" />
            <span className="rp-welcomeTxt">Welcome</span>
            <span className="rp-newHere">
              <span className="newHereSpan">New here !</span> Create an account
            </span>
            <span className="rp-loginDesc">
              Dummy text Lorffem ipsumfffdd dolors sit amet constetur aipisicing
              elits. Consatur, svvxi plavvvvt lab rerum quae
            </span>

            <div className="rp-loginInputCon">
              <div className="iconAndInputCon">
                <div className="rp-inputIconCon">
                  <PersonOutlinedIcon className="rp-Input-icon" />
                </div>
                <input
                  type="text"
                  id="username"
                  placeholder="Full Name"
                  value={values.username}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username
                      ? "input-error"
                      : "registerInputs"
                  }
                />
              </div>
              {errors.username && touched.username && (
                <p className="error">{errors.username}</p>
              )}
            </div>

            <div className="rp-loginInputCon">
              <div className="iconAndInputCon">
                <div className="rp-inputIconCon">
                  <MailOutlinedIcon className="rp-Input-icon" />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "input-error"
                      : "registerInputs"
                  }
                />
              </div>
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

            <div className="rp-loginInputCon">
              <div className="iconAndInputCon">
                <div className="rp-inputIconCon">
                  <KeyOutlinedIcon className="rp-Input-icon" />
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "input-error"
                      : "registerInputs"
                  }
                />
              </div>
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>

            <div className="rp-loginInputCon">
              <div className="iconAndInputCon">
                <div className="rp-inputIconCon">
                  <KeyOutlinedIcon className="rp-Input-icon" />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-error"
                      : "registerInputs"
                  }
                />
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              className="rp-loginBut"
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button>

            <span className="rp-alreadyAcc">Already have an account ?</span>

            <Link to="/login" className="link">
              <button className="rp-loginBut rp-loginBut1">
                Log into your account
              </button>
            </Link>
          </form>
        </div>
        <div className="lpRight">
          <div className="rpRightCon">
            <span className="rprTitle">Beehive</span>
            <span className="rprDesc">
              Connect and share with people in your life .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
