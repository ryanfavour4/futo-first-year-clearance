import React from "react";
import { IStudent } from "../../types/students.type";
import { formatDate } from "../../utils/functions/DateFormatter";

type Props = {
  user: IStudent | null;
};

export default function OtherInfo({ user }: Props) {
  return (
    <div className="shadow-lg overflow-hidden rounded-md">
      <h3 className="font-semibold text-lg bg-green p-4 text-light rounded-t-md">
        Other information's
      </h3>
      <ul className="">
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Nationality</span>
          <span>{user?.nationality || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Place of Birth</span>
          <span>{user?.place_of_birth || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Religion</span>
          <span>{user?.religion || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Date Joined</span>
          <span>
            {(user?.student.date_joined &&
              formatDate(user?.student.date_joined)) ||
              "--"}
          </span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">State of Origin</span>
          <span>{user?.state_of_origin || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Local Government Area</span>
          <span>{user?.local_government || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Permanent Address</span>
          <span>{user?.permenant_address || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Contact Address</span>
          <span>{user?.contact_address || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Next of Kin Name</span>
          <span>{user?.next_of_kin_name || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Next of Kin Relationship</span>
          <span>{user?.next_of_kin_relationship || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Next of Kin Phone No</span>
          <span>{user?.next_of_kin_telephone || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Sponsors Name</span>
          <span>{user?.sponsor_name || "--"}</span>
        </li>
        <li className="grid font-semibold grid-cols-2 p-4 even:bg-grey odd:bg-white gap-4 items-center">
          <span className="text-lg">Sponsors Address</span>
          <span>{user?.sponsor_address || "--"}</span>
        </li>
      </ul>
    </div>
  );
}
