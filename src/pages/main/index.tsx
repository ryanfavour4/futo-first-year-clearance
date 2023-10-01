import React, { useContext, useEffect, useState } from "react";
import "../../styles/page/main.css";
import { ReactComponent as DoneIcon } from "../../assets/svg/done.svg";
import { ReactComponent as Timercon } from "../../assets/svg/time-quarter.svg";
import { UserContext } from "../../store/context/UserContext";
import Img from "../contact/ui/Img";
import nouser from "../../assets/svg/user.svg";
import { Validator } from "../../utils/validators/V-lib";

export default function MainMenu() {
    const { user, processSteps } = useMainMenuController();
    return (
        <div className="border py-4">
            <div className="wrapper">
                <div className="shadow-lg bg-white overflow-hidden rounded-md p-4">
                    <div className="flex justify-between items-center my-6 mb-10">
                        <div className="md:text-lg text-base font-semibold text-dark">
                            <p>
                                Welcome{" "}
                                {user?.student.first_name ||
                                    "To Futo Clearance Portal 👋"}
                            </p>
                            <p className="md:hidden block">
                                {user?.student.username}
                            </p>
                        </div>
                        <div className="breaker flex gap-4 font-medium justify-end items-center">
                            <p className="md:block hidden">
                                {user?.student.username}
                            </p>
                            <Img
                                src={user?.profile_picture || nouser}
                                alt="Profile"
                                className="bg-light object-cover rounded-full w-20 h-20 border-4 border-green"
                            />
                        </div>
                    </div>
                    {/* //??? ============= TIMELINE BAR ============= ???? // */}
                    <div className="mt-10 md:px-10">
                        <h2 className="text-lg font-semibold mb-4">
                            Process Timeline
                            <i className="text-green text-2xl font-bold">!</i>
                        </h2>
                        <p>
                            Below Is your FUTO clearance process time line
                            please endeavour to complete each process
                            accordingly.
                        </p>

                        <div className="flex justify-between relative mt-10">
                            <div className="flex justify-between absolute w-full left-0 top-[35%]">
                                {processSteps
                                    .map((step, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`w-1/2 h-4 rounded-full ${
                                                    step.done
                                                        ? "bg-green"
                                                        : "bg-gray-300"
                                                }`}
                                            ></div>
                                        );
                                    })
                                    .slice(0, processSteps.length - 1)}
                            </div>
                            {processSteps.map((step, index) => {
                                return (
                                    <div
                                        className={`h-14 w-14 flex justify-center items-center text-center aspect-square relative p-2 rounded-full ${
                                            step.done
                                                ? "bg-green"
                                                : "bg-gray-300"
                                        }`}
                                        key={index}
                                    >
                                        {step.done ? (
                                            <DoneIcon />
                                        ) : (
                                            <Timercon />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex justify-between relative mt-10 gap-6">
                            {processSteps.map((step, index) => {
                                return (
                                    <p className="text-sm" key={index}>
                                        {step.title}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// *************************************  CONTROLLER ******************************************\\
export function useMainMenuController() {
    const { user, loading, error, getUserProfile } = useContext(UserContext);
    const [processSteps, setProcessSteps] = useState([
        { title: "Update your profile", done: false },
        { title: "Register Your I.C.T", done: false },
        { title: "Register Your Dept.", done: false },
        { title: "Engage In Food.", done: false },
        { title: "Upload Your Documents.", done: false }
    ]);
    useEffect(() => {
        if (user === null) {
            getUserProfile();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (user) {
            const { student, department, faculty, ...userInfo } = user;
            const { groups, user_permissions, ...studentInfo } = student;
            //!!! ===================  VALIDATE ================== !!!//
            const V = new Validator();
            const Vali = new Validator();
            const { errors } = V;
            const { errors: ValiErrors } = Vali;
            V.validate(userInfo);
            Vali.validate(studentInfo);
            V.rules = {};
            const updatedProcessSteps = [...processSteps];
            if (errors.length && ValiErrors) {
                updatedProcessSteps[0].done = false;
                setProcessSteps(updatedProcessSteps);
                return;
            } else {
                updatedProcessSteps[0].done = true;
                setProcessSteps(updatedProcessSteps);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return {
        user,
        loading,
        error,
        processSteps,
        getUserProfile
    };
}
