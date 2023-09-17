/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Img from "../../components/ui/Img";
import nouser from "../../assets/svg/user.svg";
import studentBg from "../../assets/images/student-bg-image.jpg";
import { ReactComponent as DateIcon } from "../../assets/svg/date-range.svg";
import { ReactComponent as RingIcon } from "../../assets/svg/ring.svg";
import { ReactComponent as GenderIcon } from "../../assets/svg/gender.svg";
import { ReactComponent as SignIcon } from "../../assets/svg/signature.svg";
import signature from "../../assets/images/signature.png";
import { ReactComponent as MailIcon } from "../../assets/svg/mail.svg";
import { UserContext } from "../../store/context/UserContext";
import Loading from "../../components/layout/Loading";
import { formatDate } from "../../utils/functions/DateFormatter";
import { FallbackComponent } from "../../components/layout/Fallback";
import OtherInfo from "./OtherInfo";
import EditProfile from "./EditProfile";
import SideSlider, { useSideSlider } from "../../components/ui/SideSlider";
import OutlineButton from "../../components/ui/OutlineButton";

function Profile() {
  const { loading, user, error, getUserProfile } = useProfile();
  const { open, toggleToggleSlider } = useSideSlider();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <FallbackComponent
        error={"Something Went Wrong"}
        resetErrorBoundary={getUserProfile}
      />
    );
  }
  const lastLogin = new Date();

  return (
    <>
      <div>
        <div className="wrapper">
          <div className="block md:grid grid-cols-3 gap-6 py-6">
            {/* //??======== COLUMN 1 ========= */}
            <div className="shadow-lg bg-white col-span-2 overflow-hidden rounded-md">
              <div className="bg-green min-h-[200px] relative overflow-hidden">
                <Img
                  src={studentBg}
                  className="w-full absolute top-0 bottom-0 left-0 right-0"
                  alt="profile banner picture"
                />
                <div className="w-full absolute top-0 bottom-0 left-0 right-0 bg-green/50" />
              </div>
              <div className="relative z-10 flex justify-between items-center p-2 px-4">
                <Img
                  src={user?.profile_picture || nouser}
                  className="bg-light h-[90px] w-[90px] object-cover rounded-full border-4 border-green -mt-12 md:ml-3 ml-0"
                  alt="profile picture"
                />
                <OutlineButton onClick={toggleToggleSlider}>
                  <SignIcon width={18} height={18} />
                  <p className="text-dark">Edit Profile</p>
                </OutlineButton>
              </div>
              {/* //**______________________________________________________*/}
              <div className="mt-2 p-4 border-t-2 border-dark rounded-b-md">
                <div className="flex justify-between gap-4 md:flex-row flex-col max-w-lg px-3">
                  {/* // ?? ====== REG NO & MINOR INFO COL 1 =========== ??*/}
                  <div className="">
                    <div className="flex gap-3 items-start">
                      <h3 className="font-bold text-lg">
                        {user?.student.first_name || "--"}{" "}
                        {user?.student.last_name || "--"}
                      </h3>
                      <small className="font-bold bg-yellow p-1 px-2 text-dark/80 rounded-lg">
                        {user?.student.user_type || "--"}
                      </small>
                    </div>
                    <h3 className="font-semibold text-base my-2">
                      Reg No: {user?.student.username || "--"}
                    </h3>
                    <div className="">
                      <div className="flex gap-3 items-center my-3">
                        <GenderIcon width={18} height={18} />
                        <small className="">{user?.sex || "--"}</small>
                      </div>
                      <div className="flex gap-3 items-center my-3">
                        <DateIcon width={18} height={18} />
                        <small className="">
                          {(user?.date_of_birth &&
                            formatDate(user?.date_of_birth)) ||
                            "--"}
                        </small>
                      </div>
                      <div className="flex gap-3 items-center my-3">
                        <RingIcon width={18} height={18} />
                        <small className="">
                          {user?.marital_status || "--"}
                        </small>
                      </div>
                      <div className="flex gap-3 items-center my-3">
                        <MailIcon width={18} height={18} />
                        <small className="">
                          {user?.student.email || "--"}
                        </small>
                      </div>
                    </div>
                  </div>
                  {/* // ?? ====== ICT AND DEPT COL 2 =========== ??*/}
                  <div className="border-t-2 border-dark/40 md:hidden"></div>
                  <div className="font-semibold text-base">
                    <div className="flex gap-3 items-center mb-3">
                      <p>I.C.T Cleared:</p>
                      <p>{user?.ict_cleared === false ? "No" : "Yes"}</p>
                    </div>
                    <div className="flex gap-3 items-center my-3">
                      <p>Department Cleared:</p>
                      <p>{user?.dept_cleared === false ? "No" : "Yes"}</p>
                    </div>
                    <div className="flex gap-3 items-center my-3">
                      <p>Signature:</p>
                      <Img
                        src={user?.signature || signature}
                        className="bg-transparent max-w-[100px] max-h-[50px] object-cover"
                        alt="signature"
                      />
                    </div>
                    <div className="flex gap-3 items-center my-3">
                      <p>Active Status:</p>
                      {user?.student.is_active === true ? (
                        <div className="p-2 bg-green rounded-full"></div>
                      ) : (
                        <div className="p-2 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* COLUMN-1-SUB_PART */}
              <div className="border py-2 font-semibold px-7 mt-2 flex gap-8 md:gap-24 md:flex-row flex-col">
                <div className="">
                  <div className="flex gap-3 items-center mb-3">
                    <p>Department name :</p>
                    <br />
                    <p>{user?.department?.name || "--"}</p>
                  </div>
                  <div className="flex gap-3 items-center mb-3">
                    <p>Program :</p>
                    <p> {"--"} </p>
                  </div>
                  <div className="flex gap-3 items-center mb-3">
                    <p>Enrollment Date :</p>
                    <p>--</p>
                  </div>
                  <div className="flex gap-3 items-center mb-3">
                    <p>Graduating date :</p>
                    <p>--</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-3 items-center mb-3">
                    <p>Faculty name :</p>
                    <p>{user?.faculty?.name}</p>
                  </div>
                  <div className="flex gap-3 items-center mb-3">
                    <p>Common name:</p>
                    <p> --</p>
                  </div>
                  <div className="flex gap-3 items-center mb-3">
                    <p>Last login :</p>
                    <p> {lastLogin.toDateString()}</p>
                  </div>
                  <div className="flex gap-3 items-center mb-3">
                    <p>Date Joined : </p>
                    <p> {lastLogin.toDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* //?? ================== COLUMN 2 =================== */}
            <OtherInfo user={user} />
          </div>
        </div>
      </div>
      {/* //?? ================ EDIT PROFILE SLIDER ================ ??//*/}
      <SideSlider open={open} toggleToggleSlider={toggleToggleSlider}>
        <EditProfile user={user} toggleToggleSlider={toggleToggleSlider} />
      </SideSlider>
    </>
  );
}

export default Profile;

const useProfile = () => {
  const { loading, error, getUserProfile, clearUserProfile, user } =
    useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      getUserProfile();
    }
    return () => {
      clearUserProfile();
    };
  }, []);

  return { loading, getUserProfile, user, error };
};
