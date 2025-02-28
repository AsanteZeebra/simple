import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ClipLoader } from "react-spinners";

// Define the validation schema using yup
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost/mypay_api/authentication/user.php",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.status === "success") {
        toast.success(response.data.message, { position: "top-right" });
        setLoading(false);
        navigate("/login"); // Navigate to login page after successful registration
      } else {
        toast.error(response.data.message, { position: "top-right" });
        setLoading(false);
      }
    } catch (error) {
      toast.error("An error occurred!", { position: "top-right" });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src="../../assets/images/logo.svg" alt="logo" />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <input
                    type="text"
                    {...register("username")}
                    className={`form-control form-control-lg ${errors.username ? "is-invalid" : ""}`}
                    id="exampleInputUsername1"
                    placeholder="Username"
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    {...register("email")}
                    className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""}`}
                    id="exampleInputEmail1"
                    placeholder="Email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    {...register("password")}
                    className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""}`}
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" /> I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3 d-grid gap-2">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit" disabled={loading}>
                    {loading ? <ClipLoader size={24} color={"#fff"} /> : "SIGN UP"}
                  </button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <Link to="/login" className="text-primary">Login</Link>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;