import React, { useContext, useState } from "react";
import { IEditStudent, IStudent } from "../../types/students.type";
import Button from "../../components/ui/Button";
import nouser from "../../assets/svg/user.svg";
import Img from "../../components/ui/Img";
import Input from "../../components/ui/Input";
import CountrySelect from "../../components/ui/CountrySelect";
import { ReferenceContext } from "../../store/context/ReferenceContext";
import OutlineButton from "../../components/ui/OutlineButton";
import { UserContext } from "../../store/context/UserContext";
import Loading from "../../components/layout/Loading";
import { toast } from "react-toastify";
import { Validator } from "../../utils/validators/V-lib";

type Props = {
  user: IStudent | null;
  toggleToggleSlider: () => void;
};

export default function EditProfile({ user, toggleToggleSlider }: Props) {
  const {
    handleEdit,
    handleImageChange,
    handleEditProfile,
    imagePreview,
    loading,
    error,
    editArray,
    gender
  } = useEditProfileController();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    toast.error("Could Not Update Your Profile. Please Try Again Later");
  }

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
                <p>{user?.student.first_name || "--"} </p>
                <p>{user?.student.last_name || ""}</p>
              </div>
              <Img
                src={
                  (imagePreview as string) || user?.profile_picture || nouser
                }
                alt="Profile"
                className="bg-light object-cover rounded-full w-20 h-20 border-4 border-green"
              />
            </label>
            <Input
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
                  value={editArray.firstName}
                  onChange={handleEdit}
                  name="firstName"
                />
              </div>
              <div className="">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type="text"
                  id="lastName"
                  value={editArray.lastName}
                  onChange={handleEdit}
                  name="lastName"
                />
              </div>
              <div className="">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  className="bg-transparent border-2 border-gray-300 rounded-lg p-2 py-3 w-full outline-none"
                  value={editArray.gender}
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
                <CountrySelect
                  value={editArray.nationality}
                  name="nationality"
                  onChange={handleEdit}
                />
              </div>
              <div className="">
                <label htmlFor="maritalStatus">Marital Status</label>
                <select
                  className="bg-transparent border-2 border-gray-300 rounded-lg p-2 py-3 w-full outline-none"
                  value={editArray?.maritalStatus}
                  id="maritalStatus"
                  name="maritalStatus"
                  onChange={handleEdit}
                >
                  <option hidden value="">
                    Marital Status...
                  </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <Input
                  type="date"
                  id="dateOfBirth"
                  value={editArray.dateOfBirth as string}
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
                  value={editArray.placeOfBirth}
                  onChange={handleEdit}
                  name="placeOfBirth"
                />
              </div>
              <div className="">
                <label htmlFor="stateOfOrigin">State Of Origin</label>
                <Input
                  type="text"
                  id="stateOfOrigin"
                  value={editArray.stateOfOrigin}
                  onChange={handleEdit}
                  name="stateOfOrigin"
                />
              </div>
              <div className="">
                <label htmlFor="localGovernment">Local Government</label>
                <Input
                  type="text"
                  id="localGovernment"
                  value={editArray.localGovernment}
                  onChange={handleEdit}
                  name="localGovernment"
                />
              </div>
              <div className="">
                <label htmlFor="permanentAddress">Permanent Address</label>
                <Input
                  type="text"
                  id="permanentAddress"
                  value={editArray.permanentAddress}
                  onChange={handleEdit}
                  name="permanentAddress"
                />
              </div>
              <div className="">
                <label htmlFor="contactAddress">Contact Address</label>
                <Input
                  type="text"
                  id="contactAddress"
                  value={editArray.contactAddress}
                  onChange={handleEdit}
                  name="contactAddress"
                />
              </div>
              <div className="">
                <label htmlFor="religion">Religion</label>
                <Input
                  type="text"
                  id="religion"
                  value={editArray.religion}
                  onChange={handleEdit}
                  name="religion"
                />
              </div>
              <div className="">
                <label htmlFor="nextOfKinName">Next Of Kin Name</label>
                <Input
                  type="text"
                  id="nextOfKinName"
                  value={editArray.nextOfKinName}
                  onChange={handleEdit}
                  name="nextOfKinName"
                />
              </div>
              <div className="">
                <label htmlFor="nextOfKinAddress">Next Of Kin Address</label>
                <Input
                  type="text"
                  id="nextOfKinAddress"
                  value={editArray.nextOfKinAddress}
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
                  value={editArray.nextOfKinRelationship}
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
                  value={editArray.nextOfKinTelephone}
                  onChange={handleEdit}
                  name="nextOfKinTelephone"
                />
              </div>
              <div className="">
                <label htmlFor="sponsorName">Sponsor Name</label>
                <Input
                  type="text"
                  id="sponsorName"
                  value={editArray.sponsorName}
                  onChange={handleEdit}
                  name="sponsorName"
                />
              </div>
              <div className="">
                <label htmlFor="sponsorAddress">Sponsor Address</label>
                <Input
                  type="text"
                  id="sponsorAddress"
                  value={editArray.sponsorAddress}
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
                  accept="image/*"
                  id="signature"
                  onChange={handleImageChange}
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
            <Button
              onClick={() => {
                handleEditProfile();
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// *************************************  CONTROLLER ******************************************\\
export function useEditProfileController() {
  const { editUserProfile, user, loading, error } = useContext(UserContext);
  const { gender } = useContext(ReferenceContext);
  const [selectedSignature, setSelectedSignature] = useState<
    string | ArrayBuffer | null
  >(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );
  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(
    null
  );
  const [signatureFile, setSignatureFile] = useState<File | null>(null);

  const [editArray, setEditArray] = useState({
    profilePicture: imagePreview,
    firstName: user?.student.first_name || "",
    lastName: user?.student.last_name || "",
    gender: user?.sex || "",
    nationality: user?.nationality || "",
    maritalStatus: user?.marital_status || "",
    dateOfBirth: user?.date_of_birth || "",
    placeOfBirth: user?.place_of_birth || "",
    stateOfOrigin: user?.state_of_origin || "",
    localGovernment: user?.local_government || "",
    permanentAddress: user?.permenant_address || "",
    contactAddress: user?.contact_address || "",
    religion: user?.religion || "",
    nextOfKinName: user?.next_of_kin_name || "",
    nextOfKinAddress: user?.next_of_kin_address || "",
    nextOfKinRelationship: user?.next_of_kin_relationship || "",
    nextOfKinTelephone: user?.next_of_kin_telephone || "",
    sponsorName: user?.sponsor_name || "",
    sponsorAddress: user?.sponsor_address || "",
    signature: selectedSignature
  });

  const handleEdit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEditArray({ ...editArray, [name]: value });
  };

  // !!! ========= HANDLE PROFILE PICTURE AND SIGNATURE CHANGE ======== !!! ///
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files && e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          if (e.target.name === "profile-picture") {
            setProfilePictureFile(selectedImage);
            setImagePreview(event.target.result);
          } else {
            setSignatureFile(selectedImage);
            setSelectedSignature(event.target.result);
          }
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleEditProfile = () => {
    const {
      firstName,
      lastName,
      gender,
      nationality,
      maritalStatus,
      dateOfBirth,
      placeOfBirth,
      stateOfOrigin,
      localGovernment,
      permanentAddress,
      contactAddress,
      religion,
      nextOfKinName,
      nextOfKinAddress,
      nextOfKinRelationship,
      nextOfKinTelephone,
      sponsorName,
      sponsorAddress
    } = editArray;

    const editPayload: IEditStudent = {
      student: {
        first_name: firstName,
        last_name: lastName
      },
      date_of_birth: dateOfBirth,
      sex: gender,
      nationality: nationality,
      place_of_birth: placeOfBirth,
      state_of_origin: stateOfOrigin,
      local_government: localGovernment,
      permenant_address: permanentAddress,
      contact_address: contactAddress,
      religion: religion,
      next_of_kin_name: nextOfKinName,
      next_of_kin_address: nextOfKinAddress,
      next_of_kin_relationship: nextOfKinRelationship,
      next_of_kin_telephone: nextOfKinTelephone,
      sponsor_name: sponsorName,
      sponsor_address: sponsorAddress,
      marital_status: maritalStatus,
      signature: signatureFile,
      profile_picture: profilePictureFile,
      department: 2,
      faculty: 1
    };

    //!!! ===================  VALIDATE ================== !!!//
    const V = new Validator();
    const { errors } = V;
    V.rules = {};
    const { signature, profilePicture, ...newPayload } = editArray;
    V.validate(newPayload);
    if (errors.length) {
      toast.error(errors[0]);
      return;
    }
    editUserProfile(editPayload);
  };

  return {
    handleEdit,
    handleImageChange,
    handleEditProfile,
    imagePreview,
    editArray,
    loading,
    error,
    gender
  };
}
