import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button";
import Img from "../../components/ui/Img";
import logo from "../../assets/images/futo-logo.png";
import { ReactComponent as EyeOpenIcon } from "../../assets/svg/eye-closed.svg";
import { ReactComponent as EyeCloseIcon } from "../../assets/svg/eye-open.svg";
import { ReactComponent as SpinningIcon } from "../../assets/svg/spinning-circle.svg";
import "../../styles/page/signups.css";
import { Validator } from "../../utils/validators/V-lib";
import { AuthContext } from "../../store/context/AuthContext";

export default function Login() {
  const {
    passwordType,
    loading,
    handleSeePassword,
    handleLoginInputChange,
    handleSubmitLoginDetails
  } = useLogin();
  return (
    <div className="md:flex min-h-[calc(100vh-92px)]">
      <div className="hidden md:flex flex-col items-center justify-center bg-center bg-no-repeat bg-gradient-to-b from-green/30 via-yellow/30 to-light w-full bg-cover">
        <Img
          src={logo}
          alt="Futo School Logo"
          className="w-full max-w-md m-auto"
        />
      </div>
      <div className="bg-futo-school-gate-fade w-full text-dark bg-cover min-h-[calc(100vh-92px)] flex gap-4 flex-col items-center justify-center bg-gradient-to-br from-light/10 via-light/20 to-light">
        <h2 className="text-xl font-bold">Log in to you account</h2>
        <p>Welcome Back 👋</p>
        <div className="bg-white w-full max-w-md p-5 rounded-md bg-opacity-80 backdrop-blur-md shadow-lg">
          <form
            onSubmit={handleSubmitLoginDetails}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1 justify-center">
              <label htmlFor="reg-number" className="font-semibold text-lg">
                Reg No.
              </label>
              <input
                type="text"
                onChange={handleLoginInputChange}
                required
                pattern="^\d{10,11}$"
                title="Registration Number Should Be A Minimum Of 10 To 11 Numbers Only"
                id="reg-number"
                name="username"
                placeholder="Registration Number"
                className="bg-transparent border-2 border-gray-300 rounded-lg p-2 w-full outline-none"
              />
            </div>
            {/* <div className="flex flex-col gap-1 justify-center">
              <label htmlFor="email" className="font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                onChange={handleLoginInputChange}
                required
                id="email"
                name="email"
                placeholder="Email Address"
                className="bg-transparent border-2 border-gray-300 rounded-lg p-2 w-full outline-none"
              />
            </div> */}
            <div className="flex flex-col gap-1 justify-center relative">
              <label htmlFor="password" className="font-semibold text-lg">
                Password
              </label>
              <input
                type={passwordType}
                onChange={handleLoginInputChange}
                required
                title="Password Should Be At Least 6 Characters Long, And Less Than 12 Characters"
                id="password"
                name="password"
                placeholder="Password"
                className="bg-transparent border-2 border-gray-300 rounded-lg p-2 w-full outline-none"
              />
              <span
                onClick={handleSeePassword}
                className="absolute right-3 top-1 cursor-pointer"
              >
                {passwordType === "password" ? (
                  <EyeCloseIcon width={25} height={25} />
                ) : (
                  <EyeOpenIcon width={25} height={25} />
                )}
              </span>
            </div>
            <Button disabled={loading}>
              <span>{loading ? "Loading..." : "Login"}</span>
              {loading && (
                <span>
                  <SpinningIcon />
                </span>
              )}
            </Button>
          </form>
          <div className="mt-4">
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-green-500 font-semibold text-green"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-sm text-center text-green-500 font-semibold text-green"
            >
              Forgot Password!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export type loginObjectType = {
  username: string;
  // email: string;
  password: string;
};

export const useLogin = () => {
  const { loading, login } = useContext(AuthContext);
  const [passwordType, setPasswordType] = useState("password");
  const [loginObject, setLoginObject] = useState<loginObjectType>({
    username: "",
    // email: "",
    password: ""
  });
  const V = new Validator();
  const { errors } = V;
  V.rules = {
    password: {
      minLength: 6,
      regex: /^(?![!@#$%^&*()_+{}\\[\]:;<>,.?~=/|\\-]+$).*/
    }
  };

  //??? ===================== CHANGE SEE PASSWORD TYPE ==================== ???//
  const handleSeePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  //??? ===================== HANDLE INPUT CHANGE ==================== ???//
  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginObject({ ...loginObject, [e.target.name]: e.target.value });
  };

  //??? ===================== HANDLE SUBMIT LOGIN DETAILS ==================== ???//
  const handleSubmitLoginDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    V.validate(loginObject);
    if (errors.length) return toast.error(errors[0]);
    login(loginObject);
  };

  return {
    passwordType,
    loading,
    handleSeePassword,
    handleLoginInputChange,
    handleSubmitLoginDetails
  };
};
