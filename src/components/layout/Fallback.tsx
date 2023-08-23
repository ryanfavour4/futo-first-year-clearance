import { ComponentType } from "react";
import { FallbackProps } from "react-error-boundary";

export const FallbackComponent: ComponentType<FallbackProps> = ({ error }) => {
  console.log(error);
  if (error.name === "NotFoundError") {
    return (
      <div>
        <h2>Page not found</h2>
        <p>We can't seem to find the page you're looking for.</p>
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
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  );
};

export const errorHandler = (error: any, errorInfo: any) => {
  console.log(error, "ERROR");
  console.log(errorInfo, "ERROR INFORMATION");
};
