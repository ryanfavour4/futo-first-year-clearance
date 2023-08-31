import React, { useContext, useState } from "react";
import { IStudent } from "../../types/students.type";
import Button from "../../components/ui/Button";
import nouser from "../../assets/svg/user.svg";
import Img from "../../components/ui/Img";
import Input from "../../components/ui/Input";
import CountrySelect from "../../components/ui/CountrySelect";
import { ReferenceContext } from "../../store/context/ReferenceContext";
import OutlineButton from "../../components/ui/OutlineButton";

type Props = {
  user: IStudent | null;
  toggleToggleSlider: () => void;
};

export default function EditProfile({ user, toggleToggleSlider }: Props) {
  const { handleEdit, handleImageChange, setSignature, imagePreview, gender } =
    useEditProfileController();

  return (
    <div className="">
      <div className="wrapper !max-w-6xl md:p-6">
        {/* //?? =============== EDIT PROFILE PICTURE ================= */}
        <div className="flex items-center justify-between max-w-5xl m-auto p-2">
          <div className="">
            <h4 className="text-xl font-semibold">Edit Profile</h4>
            <small className="text-grey mt-0">{user?.student.username}</small>
          </div>
          <div>
            <label
              className="flex items-center cursor-pointer gap-4"
              htmlFor="profile-picture"
            >
              <div className="md:text-lg text-base font-semibold text-dark text-right max-w-[150px] breaker">
                <p>{user?.student.first_name || "Chukwuka"} </p>
                <p>{user?.student.last_name || "Ryan Favour"}</p>
              </div>
              <Img
                src={
                  (imagePreview as string) || user?.profile_picture || nouser
                }
                alt="Profile"
                className="bg-light object-cover rounded-full w-20 h-20 border-4 border-green"
              />
            </label>
            <input
              type="file"
              name="profile-picture"
              hidden
              id="profile-picture"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="border rounded-md p-3 mt-4">
          {/* //?? =============== BASIC INFORMATION ================= */}
          <div className="max-w-xl m-auto">
            <h3 className="text-lg font-semibold mb-6">Basic Information</h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
              <div className="">
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  id="firstName"
                  onChange={handleEdit}
                  name="firstName"
                />
              </div>
              <div className="">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type="text"
                  id="lastName"
                  onChange={handleEdit}
                  name="lastName"
                />
              </div>
              <div className="">
                <label htmlFor="sex">Gender</label>
                <select
                  name="sex"
                  id="sex"
                  className="bg-transparent border-2 border-gray-300 rounded-lg p-2 py-3 w-full outline-none"
                  onChange={handleEdit}
                >
                  <option hidden value="">
                    Select Your Gender
                  </option>
                  {gender.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <label htmlFor="firstName">Nationality</label>
                <CountrySelect name="nationality" onChange={handleEdit} />
              </div>
              <div className="">
                <label htmlFor="maritalStatus">Marital Status</label>
                <select
                  className="bg-transparent border-2 border-gray-300 rounded-lg p-2 py-3 w-full outline-none"
                  id="maritalStatus"
                  name="maritalStatus"
                  onChange={handleEdit}
                >
                  <option hidden value="">
                    Marital Status...
                  </option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <Input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  onChange={handleEdit}
                />
              </div>
            </div>
          </div>
          <hr className="my-6" />
          {/* //?? =============== OTHER INFORMATION ================= */}
          <div className="max-w-xl m-auto">
            <h3 className="text-lg font-semibold mb-6">Other Information</h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
              <div className="">
                <label htmlFor="placeOfBirth">Place Of Birth</label>
                <Input
                  type="text"
                  id="placeOfBirth"
                  onChange={handleEdit}
                  name="placeOfBirth"
                />
              </div>
              <div className="">
                <label htmlFor="stateOfOrigin">State Of Origin</label>
                <Input
                  type="text"
                  id="stateOfOrigin"
                  onChange={handleEdit}
                  name="stateOfOrigin"
                />
              </div>
              <div className="">
                <label htmlFor="localGovernment">Local Government</label>
                <Input
                  type="text"
                  id="localGovernment"
                  onChange={handleEdit}
                  name="localGovernment"
                />
              </div>
              <div className="">
                <label htmlFor="permanentAddress">Permanent Address</label>
                <Input
                  type="text"
                  id="permanentAddress"
                  onChange={handleEdit}
                  name="permanentAddress"
                />
              </div>
              <div className="">
                <label htmlFor="contactAddress">Contact Address</label>
                <Input
                  type="text"
                  id="contactAddress"
                  onChange={handleEdit}
                  name="contactAddress"
                />
              </div>
              <div className="">
                <label htmlFor="religion">Religion</label>
                <Input
                  type="text"
                  id="religion"
                  onChange={handleEdit}
                  name="religion"
                />
              </div>
              <div className="">
                <label htmlFor="nextOfKinName">Next Of Kin Name</label>
                <Input
                  type="text"
                  id="nextOfKinName"
                  onChange={handleEdit}
                  name="nextOfKinName"
                />
              </div>
              <div className="">
                <label htmlFor="nextOfKinAddress">Next Of Kin Address</label>
                <Input
                  type="text"
                  id="nextOfKinAddress"
                  onChange={handleEdit}
                  name="nextOfKinAddress"
                />
              </div>
              <div className="">
                <label htmlFor="nextOfKinRelationship">
                  Next Of Kin Relationship
                </label>
                <Input
                  type="text"
                  id="nextOfKinRelationship"
                  onChange={handleEdit}
                  name="nextOfKinRelationship"
                />
              </div>
              <div className="">
                <label htmlFor="nextOfKinTelephone">
                  Next Of Kin Telephone
                </label>
                <Input
                  type="tel"
                  id="nextOfKinTelephone"
                  onChange={handleEdit}
                  name="nextOfKinTelephone"
                />
              </div>
              <div className="">
                <label htmlFor="sponsorName">Sponsor Name</label>
                <Input
                  type="text"
                  id="sponsorName"
                  onChange={handleEdit}
                  name="sponsorName"
                />
              </div>
              <div className="">
                <label htmlFor="sponsorAddress">Sponsor Address</label>
                <Input
                  type="text"
                  id="sponsorAddress"
                  onChange={handleEdit}
                  name="sponsorAddress"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="signature">
                  <p>Signature</p>
                  <small className="text-dark/80">
                    (Recommended: .PNG image less than 1.5mb)
                  </small>
                </label>
                <Input
                  type="file"
                  accept="image/png"
                  id="signature"
                  onChange={(e) =>
                    setSignature(e.target.files && e.target.files[0])
                  }
                  name="signature"
                />
              </div>
            </div>
          </div>
          {/* //?? =============== BUTTONS ================= */}
          <div className="flex justify-between max-w-xl m-auto my-7">
            <OutlineButton
              className="!text-green !border-green"
              onClick={toggleToggleSlider}
            >
              Cancel
            </OutlineButton>
            <Button onClick={toggleToggleSlider}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useEditProfileController() {
  const { gender } = useContext(ReferenceContext);
  const [signature, setSignature] = useState<File | null>(null);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );
  const [editArray, setEditArray] = useState({
    profilePicture,
    // ________________ \\
    firstName: "",
    lastName: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
    dateOfBirth: "",
    // ________________ \\
    placeOfBirth: "",
    stateOfOrigin: "",
    localGovernment: "",
    permanentAddress: "",
    contactAddress: "",
    religion: "",
    nextOfKinName: "",
    nextOfKinAddress: "",
    nextOfKinRelationship: "",
    nextOfKinTelephone: "",
    sponsorName: "",
    sponsorAddress: "",
    signature,
    department: 0,
    faculty: 0
  });

  const handleEdit = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditArray({ ...editArray, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files && e.target.files[0];
    setProfilePicture(selectedImage);
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setImagePreview(event.target.result);
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  return {
    handleEdit,
    handleImageChange,
    imagePreview,
    setSignature,
    gender
  };
}
