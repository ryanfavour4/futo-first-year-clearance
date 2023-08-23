import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Img from "../../components/ui/Img";
import logo from "../../assets/images/futo-logo.png";
import { ReactComponent as SpinningIcon } from "../../assets/svg/spinning-circle.svg";
import { toast } from "react-toastify";
import { AuthContext } from "../../store/context/AuthContext";
import { Validator } from "../../utils/validators/V-lib";

export default function ForgotPassword() {
  const { loading, handleInputChange, handleSubmitDetails } =
    useForgotPassword();
  return (
    <div className="md:flex min-h-[calc(100vh-92px)]">
      <div className="bg-futo-school-gate-fade w-full text-dark bg-cover min-h-[calc(100vh-92px)] flex gap-4 flex-col items-center justify-center bg-gradient-to-br from-light/10 via-light/20 to-light">
        <h2 className="text-xl font-bold">Forgot Your Password</h2>
        <p className="text-center">
          Type in your email address and submit, you will receive an email with
          a link to change your password 💬
        </p>
        <div className="bg-white w-full max-w-md p-5 rounded-md bg-opacity-80 backdrop-blur-md shadow-lg">
          <form onSubmit={handleSubmitDetails} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 justify-center">
              <label htmlFor="email" className="font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                onChange={handleInputChange}
                required
                id="email"
                name="email"
                placeholder="Email Address"
                className="bg-transparent border-2 border-gray-300 rounded-lg p-2 w-full outline-none"
              />
            </div>

            <Button disabled={loading}>
              <span>{loading ? "Loading..." : "Submit"}</span>
              {loading && (
                <span>
                  <SpinningIcon />
                </span>
              )}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/login"
              className="text-sm text-center text-green-500 font-semibold text-green"
            >
              Log in instead
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center justify-center bg-center bg-no-repeat bg-gradient-to-b from-green/30 via-yellow/30 to-light w-full bg-cover">
        <Img
          src={logo}
          alt="Futo School Logo"
          className="w-full max-w-md m-auto"
        />
      </div>
    </div>
  );
}

export const useForgotPassword = () => {
  const { loading, forgotPassword } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const V = new Validator();
  const { errors } = V;
  V.rules = {
    email: {
      email: true,
    },
  };

  //??? ===================== HANDLE INPUT CHANGE ==================== ???//
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //??? ===================== HANDLE SUBMIT LOGIN DETAILS ==================== ???//
  const handleSubmitDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    V.validate(email);
    if (errors.length) return toast.error(errors[0]);
    forgotPassword(email);
  };

  return {
    loading,
    handleInputChange,
    handleSubmitDetails,
  };
};
