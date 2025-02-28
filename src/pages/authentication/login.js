import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the validation schema using yup
const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost/mypay_api/authentication/auth.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.token) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("username", result.username); // Store username in local storage
                console.log("Login successful:", result);
                toast.success("Login successful!", { position: "top-right" });
                navigate("/dashboard"); // Navigate to Dashboard after successful login
            } else {
                toast.error(result.message || "Login failed.", { position: "top-right" });
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.", { position: "top-right" });
            console.error("Error:", error);
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
                            <h4>Hello! let's get started</h4>
                            <h6 className="font-weight-light">Sign in to continue.</h6>
                            <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
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
                                <div className="mt-3 d-grid gap-2">
                                    <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                                        SIGN IN
                                    </button>
                                </div>
                                <div className="my-2 d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <label className="form-check-label text-muted">
                                            <input type="checkbox" className="form-check-input" /> Keep me signed in
                                        </label>
                                    </div>
                                    <Link to="#" className="auth-link text-black">Forgot password?</Link>
                                </div>
                                
                                <div className="text-center mt-4 font-weight-light">
                                    Don't have an account? <Link to="/account" className="text-primary">Create</Link>
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

export default Login;