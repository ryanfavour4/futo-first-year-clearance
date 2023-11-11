import { ComponentType } from "react";
import { FallbackProps } from "react-error-boundary";
import Wrong from '../../assets/svg/Something-wrong.svg'
export const FallbackComponent: ComponentType<FallbackProps> = ({ error }) => {
  const handleRefresh = () => {
    window.location.reload();
  };
  console.log(error);
  if (error.name === "NotFoundError") {
    return (
      <div>
        <h2>Page not found</h2>
        
        <p>Oops! Looks like the page doesn't exist.</p>
      </div>
    );
  } else {
    console.log(error);
    console.log(error.message);
    console.log(error.stack);
    console.log(error.name);
    console.log(error.cause);
    console.log(error.code);
    console.log(error.errno);
    console.log(error.syscall);
    console.log(error.address);
    console.log(error.port);
    console.log(error.path);
    console.log(error.dest);
    console.log(error.host);
    console.log(error.family);
    console.log(error.localAddress);
    console.log(error.localPort);
    console.log(error.message);
  }
  return (
    <div className=" flex flex-col items-center pt-32 h-screen">
      <img className="w-60" src={Wrong} alt="" />
      <h2 className="pt-4 text-center ">There seems to be an error :( </h2>
      <h2 className="pb-4 text-center ">Check your connection and Refresh Page</h2>
      <button onClick={handleRefresh} className="bg-green text-sm text-white p-2 rounded-lg mb-4 hover:bg-white hover:border-green hover:text-green ">Reload Page</button>
      <pre>{error.message}</pre>
    </div>
  );
};

export const errorHandler = (error: any, errorInfo: any) => {
  console.log(error, "ERROR");
  console.log(errorInfo, "ERROR INFORMATION");
};
