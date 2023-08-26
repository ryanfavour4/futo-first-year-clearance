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
import OutlineLink from "../../components/ui/OutlineLink";
import { UserContext } from "../../store/context/UserContext";
import Loading from "../../components/layout/Loading";
import { formatDate } from "../../utils/functions/DateFormatter";
import { FallbackComponent } from "../../components/layout/Fallback";

function Profile() {
  const { loading, user, error, getUserProfile } = useProfile();

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

  return (
    <div>
      <div className="wrapper">
        <div className="block md:grid grid-cols-3 gap-6 py-6">
          {/* //??======== COLUMN 1 ========= */}
          <div className="shadow-lg col-span-2 overflow-hidden rounded-md">
            <div className="bg-green min-h-[200px] relative overflow-hidden">
              <Img
                src={studentBg}
                className="w-full absolute top-0 bottom-0 left-0 right-0"
                alt="profile banner picture"
              />
              <div className="w-full absolute top-0 bottom-0 left-0 right-0 bg-green/50" />
            </div>
            <div className="relative z-10 flex justify-between items-center p-2">
              <Img
                src={nouser}
                width="90"
                className="bg-light rounded-full border-4 border-green -mt-12 ml-8"
                alt="profile picture"
              />
              <OutlineLink to="/">
                <SignIcon width={18} height={18} />
                <p className="text-dark">Edit Profile</p>
              </OutlineLink>
            </div>
            {/* //**______________________________________________________*/}
            <div className="mt-2 p-4 border-t-2 border-dark">
              <div className="flex justify-between max-w-lg">
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
                      <small className="">{user?.marital_status || "--"}</small>
                    </div>
                    <div className="flex gap-3 items-center my-3">
                      <MailIcon width={18} height={18} />
                      <small className="">{user?.student.email || "--"}</small>
                    </div>
                  </div>
                </div>
                {/* // ?? ====== ICT AND DEPT COL 2 =========== ??*/}
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
                      src={signature}
                      className="bg-light max-w-[100px]"
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
          </div>
          {/* //?? ================== COLUMN 2 =================== */}
          <div className="shadow-lg overflow-hidden rounded-md">
            <h3 className="font-semibold text-lg mb-4 bg-green p-4 text-light rounded-t-md">
              Other information's
            </h3>
            <ul className="">
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Nationality</span>
                <span>{user?.nationality || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Place of Birth</span>
                <span>{user?.place_of_birth || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Religion</span>
                <span>{user?.religion || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Date Joined</span>
                <span>
                  {(user?.student.date_joined &&
                    formatDate(user?.student.date_joined)) ||
                    "--"}
                </span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">State of Origin</span>
                <span>{user?.state_of_origin || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Local Government Area</span>
                <span>{user?.local_government || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Permanent Address</span>
                <span>{user?.permenant_address || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Contact Address</span>
                <span>{user?.contact_address || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Next of Kin Name</span>
                <span>{user?.next_of_kin_name || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Next of Kin Relationship</span>
                <span>{user?.next_of_kin_relationship || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Next of Kin Phone No</span>
                <span>{user?.next_of_kin_telephone || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Sponsors Name</span>
                <span>{user?.sponsor_name || "--"}</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Sponsors Address</span>
                <span>{user?.sponsor_address || "--"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

const useProfile = () => {
  const { loading, error, getUserProfile, user } = useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      getUserProfile();
    }
  }, []);

  return { loading, getUserProfile, user, error };
};
