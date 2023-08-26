import React from "react";
import { ReactComponent as LoadingIcon } from "../../assets/svg/Page-Loading.svg";

function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center flex-col">
      <div className="">
        <LoadingIcon />
      </div>
    </div>
  );
}

export default Loading;
