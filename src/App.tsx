import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Router";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import Layout from "./components/layout/Layout";
import { RootStore } from "./store/context/RootStore";
import { ToastContainer } from "react-toastify";
import { FallbackComponent, errorHandler } from "./components/layout/Fallback";
import "react-toastify/dist/ReactToastify.css";
import "./styles/components/CountrySelect.css";

function App() {
  return (
    <BrowserRouter>
      <ReactErrorBoundary
        FallbackComponent={FallbackComponent}
        onError={errorHandler}
      >
        <RootStore>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Layout>
            <Routers />
          </Layout>
        </RootStore>
      </ReactErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
