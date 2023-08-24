/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Img from "../../components/ui/Img";
import nouser from "../../assets/svg/user.svg";
import studentBg from "../../assets/images/student-bg-image.jpg";
import { ReactComponent as DateIcon } from "../../assets/svg/date-range.svg";
import { ReactComponent as RingIcon } from "../../assets/svg/ring.svg";
import { ReactComponent as GenderIcon } from "../../assets/svg/gender.svg";
import { ReactComponent as SignIcon } from "../../assets/svg/signature.svg";
import { ReactComponent as CaliPenIcon } from "../../assets/svg/calligraphy-pen.svg";
import OutlineLink from "../../components/ui/OutlineLink";
import { UserContext } from "../../store/context/UserContext";

function Profile() {
  const { loading } = useProfile();
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
            <div className="mt-2 p-4 border-t-2 border-dark">
              <div className="flex gap-3">
                <h3 className="font-bold text-lg">Paul Schmidt</h3>
                <small className="font-bold bg-yellow p-1 px-2 text-dark/80 rounded-lg">
                  Student
                </small>
              </div>
              <h3 className="font-semibold text-base my-2">
                Reg No: 20203349272
              </h3>
              <div className="flex gap-3 items-center my-3">
                <GenderIcon width={18} height={18} />
                <small className="">Non Binary</small>
              </div>
              <div className="flex gap-3 items-center my-3">
                <DateIcon width={18} height={18} />
                <small className="">April 15 2022</small>
              </div>
              <div className="flex gap-3 items-center my-3">
                <RingIcon width={18} height={18} />
                <small className="">Single</small>
              </div>
              <div className="flex gap-3 items-center my-3">
                <CaliPenIcon width={18} height={18} />
                <small className="">⌂§†§⌂</small>
              </div>
            </div>
          </div>
          {/* //??======== COLUMN 2 ========= */}
          <div className="shadow-lg overflow-hidden rounded-md">
            <h3 className="font-semibold text-lg mb-4 bg-green p-4 text-light rounded-t-md">
              Other information's
            </h3>
            <ul className="">
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Nationality</span>
                <span>British</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Place of birth</span>
                <span>Somewhere on earth</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Religion</span>
                <span>Christian</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">State of origin</span>
                <span>London</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Nationality</span>
                <span>British</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Place of birth</span>
                <span>Somewhere on earth</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">Religion</span>
                <span>Christian</span>
              </li>
              <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white">
                <span className="text-lg">State of origin</span>
                <span>London</span>
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
  const { loading, getUserProfile } = useContext(UserContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  return { loading, getUserProfile };
};
