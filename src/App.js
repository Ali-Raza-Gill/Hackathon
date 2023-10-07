import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Routes from "./Pages/Routes";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
