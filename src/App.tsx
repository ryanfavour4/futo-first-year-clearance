import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Router";
import Layout from "./components/layout/Layout";
import { RootStore } from "./store/context/RootStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
