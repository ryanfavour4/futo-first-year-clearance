import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Img from "../../components/ui/Img";
import logo from "../../assets/images/futo-logo.png";
import { ReactComponent as EyeOpenIcon } from "../../assets/svg/eye-closed.svg";
import { ReactComponent as EyeCloseIcon } from "../../assets/svg/eye-open.svg";
import { ReactComponent as SpinningIcon } from "../../assets/svg/spinning-circle.svg";
import { useLogin } from "./Login";
import { Validator } from "../../utils/validators/V-lib";
import { toast } from "react-toastify";
import { AuthContext } from "../../store/context/AuthContext";

export default function Register() {
  const { passwordType, handleSeePassword } = useLogin();
  const {
    userTypes,
    loading,
    handleRegisterInputChange,
    handleSubmitRegisterDetails,
  } = useRegister();

  return (
    <div className="md:flex min-h-[calc(100vh-92px)]">
      <div className="hidden md:flex flex-col items-center justify-center bg-center bg-no-repeat bg-gradient-to-b from-green/30 via-yellow/30 to-light w-full bg-cover">
        <Img
          src={logo}
          alt="Futo School Logo"
          className="w-full max-w-md m-auto"
        />
      </div>
      <div className="bg-futo-school-gate-fade w-full py-6 text-dark bg-cover min-h-[calc(100vh-92px)] flex gap-4 flex-col items-center justify-center bg-gradient-to-br from-light/10 via-light/20 to-light">
        <h2 className="text-xl font-bold">Register a new account</h2>
        <p>Let's get you started 😊</p>
        <div className="bg-white w-full max-w-md p-5 rounded-md bg-opacity-80 backdrop-blur-md shadow-lg">
          <form
            onSubmit={handleSubmitRegisterDetails}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1 justify-center">
              <label htmlFor="reg-number" className="font-semibold text-lg">
                Reg No.
              </label>
              <input
                type="text"
                onChange={handleRegisterInputChange}
                required
                pattern="^\d{10,11}$"
                title="Registration Number Should Be A Minimum Of 10 To 11 Numbers Only"
                id="reg-number"
                name="username"
                placeholder="Registration Number"
                className="bg-transparent border-2 border-gray-300 rounded-lg p-2 w-full outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <label htmlFor="email" className="font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                onChange={handleRegisterInputChange}
                required
                title="Email Should Be A Valid One"
                id="email"
                name="email"
                placeholder="Email Address"
                className="bg-transparent border-2 border-gray-300 rounded-lg p-2 w-full outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <label htmlFor="user-type" className="font-semibold text-lg">
                User Type
              </label>
              <select
                onChange={handleRegisterInputChange}
                className="bg-transparent border-2 border-gray-300 rounded-lg p-2 py-3 w-full outline-none"
                required
                title="What user type are you"
                name="user_type"
                id="user-type"
              >
                <option hidden value="">
                  E.g Student
                </option>
                {userTypes.map((types) => (
                  <option
                    className="border-gray-900 p-1 bg-green text-white"
                    key={types.usertype}
                    value={types.usertype}
                  >
                    {types.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 justify-center relative">
              <label htmlFor="password" className="font-semibold text-lg">
                Password
              </label>
              <input
                type={passwordType}
                onChange={handleRegisterInputChange}
                id="password"
                required
                title="Password Should Be At Least 6 Characters Long, And Less Than 12 Characters"
                name="password1"
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
            <div className="flex flex-col gap-1 justify-center relative">
              <label
                htmlFor="confirm-password"
                className="font-semibold text-lg"
              >
                Confirm Password
              </label>
              <input
                type={passwordType}
                onChange={handleRegisterInputChange}
                required
                id="confirm-password"
                name="password2"
                placeholder="Confirm Password"
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
              <span>{loading ? "Loading..." : "Register"}</span>
              {loading && (
                <span>
                  <SpinningIcon />
                </span>
              )}
            </Button>
          </form>
          <div className="mt-4">
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-500 font-semibold text-green"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export type registerObjectType = {
  username: string;
  email: string;
  password1: string;
  password2: string;
  user_type: string;
};

export const useRegister = () => {
  const [userTypes] = useState([
    {
      usertype: "STUDENT",
      value: "Student",
    },
    {
      usertype: "DAO",
      value: "D.A.O",
    },
    {
      usertype: "SENATE",
      value: "Senate",
    },
    {
      usertype: "SAO",
      value: "S.A.O",
    },
    {
      usertype: "UAO",
      value: "U.A.O",
    },
    {
      usertype: "SCREEN ",
      value: "Screen",
    },
  ]);
  const { loading, Register } = useContext(AuthContext);
  const [registerObject, setRegisterObject] = useState<registerObjectType>({
    username: "",
    email: "",
    password1: "",
    password2: "",
    user_type: "",
  });
  
  // ?? ============ !! VALIDATE WITH V !! ============== ?? //
  const V = new Validator();
  const { errors } = V;
  V.rules = {
    password1: {
      minLength: 6,
      regex: /^(?![!@#$%^&*()_+{}\\[\]:;<>,.?~=/|\\-]+$).*/,
    },
    password2: { toMatch: registerObject.password1 },
  };

  //??? ===================== HANDLE INPUT CHANGE ==================== ???//
  const handleRegisterInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRegisterObject({ ...registerObject, [e.target.name]: e.target.value });
  };

  //??? ===================== HANDLE SUBMIT LOGIN DETAILS ==================== ???//
  const handleSubmitRegisterDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    V.validate(registerObject);
    if (errors.length) return toast.error(errors[0]);
    Register(registerObject);
  };

  return {
    userTypes,
    loading,
    handleRegisterInputChange,
    handleSubmitRegisterDetails,
  };
};
