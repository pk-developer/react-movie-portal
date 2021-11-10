import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-toastify/dist/ReactToastify.css";
import AppRoute from "routes/app.route";
import "./App.css";
import { useLogin } from "shared/hooks";
import { CookieStorage } from "cookie-storage";
import { React } from "shared/shared-import";
const cookies = new CookieStorage();
const isLogin = cookies.getItem("access_token") ? true : false;

function App() {
  const { setLogin } = useLogin((state: any) => state);
  React.useEffect(() => {
    setLogin(isLogin);
  }, []);
  return (
    <BrowserRouter>
      {AppRoute}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
