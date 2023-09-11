import React, { ReactNode, createContext, useEffect, useState } from "react";
import { API_BASE_URL, Api, setAxiosToken } from "../../utils/config/Api";
import { IEditStudent, IStudent } from "../../types/students.type";
import { toast } from "react-toastify";
import axios from "axios";

type UserContextType = {
  user: IStudent | null;
  loading: boolean;
  error: boolean;
  message: string;
  getUserProfile: () => void;
  editUserProfile: (editUserPayload: IEditStudent) => void;
  clearUserProfile: () => void;
};

export const UserContext = createContext<UserContextType>(
  [] as unknown as UserContextType
);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IStudent | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const API_KEY_LOCAL_STORAGE = localStorage.getItem("ApiKey");

  useEffect(() => {
    setApiKey(API_KEY_LOCAL_STORAGE);
  }, [API_KEY_LOCAL_STORAGE]);

  //????????========================= GET USERS ( STUDENT ) PROFILE ======================== ??//
  const getUserProfile = () => {
    setLoading(true);
    setError(false);
    setMessage("");
    if (apiKey) setAxiosToken(apiKey);
    Api.get("/student/profile/")
      .then((res) => {
        setLoading(false);
        setMessage("");
        setUser(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setMessage("An Error Occurred");
      });
  };

  //????????========================= EDIT USERS ( STUDENT ) PROFILE ======================== ??//
  const editUserProfile = (editUserPayload: IEditStudent) => {
    setLoading(true);
    setError(false);
    setMessage("");
    setLoading(false);
    if (apiKey) setAxiosToken(apiKey);
    if (
      editUserPayload.profile_picture !== null ||
      editUserPayload.signature !== null
    ) {
      uploadImage(editUserPayload);
    }
    const { signature, profile_picture, ...newPayload } = editUserPayload;
    Api.patch("student/profile/edit/", newPayload)
      .then((res) => {
        setLoading(false);
        setMessage("Profile Edited Successfully");
        toast.success("Profile Edited Successfully");
        getUserProfile();
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setMessage("An Error Occurred Editing Profile");
      });
  };

  const uploadImage = async (editUserPayload: IEditStudent) => {
    for (const key in editUserPayload) {
      if (editUserPayload.hasOwnProperty(key)) {
        if (key === "profile_picture" || key === "signature") {
          const formData = new FormData();
          formData.append(
            key,
            editUserPayload[key as keyof IEditStudent] as Blob
          );
          axios.patch(`${API_BASE_URL}/student/profile/edit/`, formData, {
            headers: {
              Authorization: `token ${apiKey}`,
              "Content-Type": "multipart/form-data"
            }
          });
        }
      }
    }
  };

  //????????========================= CLEAR USERS ( STUDENT ) PROFILE ======================== ??//
  const clearUserProfile = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        error,
        message,
        getUserProfile,
        editUserProfile,
        clearUserProfile
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
