import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Api, setAxiosToken } from "../../utils/config/Api";
import { IDepartments, IFaculties } from "../../types/sections.type";

type SectionContextType = {
    departments: IDepartments[] | [];
    faculties: IFaculties[] | [];
    loading: boolean;
    error: boolean;
    message: string;
    getStudentDepartments: () => void;
    getStudentFaculties: () => void;
};

export const SectionContext = createContext<SectionContextType>(
    [] as unknown as SectionContextType
);

type Props = {
    children: ReactNode;
};

export const SectionProvider = ({ children }: Props) => {
    const [departments, setDepartments] = useState<IDepartments[] | []>([]);
    const [faculties, setFaculties] = useState<IFaculties[] | []>([]);
    const [apiKey, setApiKey] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const API_KEY_LOCAL_STORAGE = localStorage.getItem("ApiKey");

    useEffect(() => {
        setApiKey(API_KEY_LOCAL_STORAGE);
    }, [API_KEY_LOCAL_STORAGE]);

    //????????========================= GET ALL DEPARTMENTS ======================== ??//
    const getStudentDepartments = () => {
        setLoading(true);
        setError(false);
        setMessage("");
        if (apiKey) setAxiosToken(apiKey);
        Api.get("/student/departments/")
            .then((res) => {
                setLoading(false);
                setMessage("");
                setDepartments(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
                setMessage("An Error Occurred");
            });
    };

    //????????========================= GET ALL FACULTIES ======================== ??//
    const getStudentFaculties = () => {
        setLoading(true);
        setError(false);
        setMessage("");
        if (apiKey) setAxiosToken(apiKey);
        Api.get("/student/faculties/")
            .then((res) => {
                setLoading(false);
                setMessage("");
                setFaculties(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
                setMessage("An Error Occurred");
            });
    };

    return (
        <SectionContext.Provider
            value={{
                departments,
                faculties,
                loading,
                error,
                message,
                getStudentDepartments,
                getStudentFaculties,
            }}
        >
            {children}
        </SectionContext.Provider>
    );
};
