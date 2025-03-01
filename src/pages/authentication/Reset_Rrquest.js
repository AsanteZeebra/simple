import react from "react";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";

const Reset_Request = () => {
    const [email, setEmail] = useState("");

    const handleRequestReset = async (e) => {
      e.preventDefault();
  
      // Validate email
      if (!validator.isEmail(email)) {
        toast.error("Please enter a valid email address");
        return;
      }
  
      try {
        const response = await axios.post("http://localhost/mypay_api/authentication/request_reset.php", { email });
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response?.data.error || "An error occurred");
      }
    };

  return (
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img src="../../assets/images/logo.svg" alt="logo" />
            </div>
            <h4>Reset your Password</h4>
            <h6 className="font-weight-light">Enter Your EMail</h6>
            <form className="pt-3" onSubmit={handleRequestReset}>
              <div className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mt-3 d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                >
                  Request Reset
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset_Request;
