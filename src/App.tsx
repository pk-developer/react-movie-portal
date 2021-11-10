
import { BrowserRouter} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppRoute from "routes/app.route";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {AppRoute}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
