import errorImage from "../assets/svg/404-error.svg";
import { NavLink } from "react-router-dom";
export default function ErrorPage() {
    return (
        <div
            className="flex flex-col justify-center items-center pt-6"
            id="error-page"
        >
            <h1 className="text-4xl font-bold text-center">Oops! Try Again.</h1>
            <img className="w-80" src={errorImage} alt="" />
            <h1 className="pb-2 text-lg">Seems that page doesn't exist.</h1>
            <button className="bg-green text-sm text-white p-2 rounded-lg mb-4 hover:bg-white hover:border-green hover:text-green ">
                <NavLink to="/">Go to home</NavLink>{" "}
            </button>

            <p>{/* <i>{error.statusText || error.message}</i> */}</p>
        </div>
    );
}
