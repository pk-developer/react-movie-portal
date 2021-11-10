import { AuthService } from "core/auth/auth.interceptor";
import { useNavigate } from "react-router";
import { SCREENS } from "routes/route.label";
import { SearchBox } from "shared/atoms";
import { useLogin } from "shared/hooks";
import { React } from "shared/shared-import";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const authService = new AuthService();
  const { isLogin, setLogin } = useLogin((state: any) => state);
  const navigate = useNavigate();
  const logout = () => {
    authService.logout();
    setLogin(false);
    navigate(SCREENS.LOGIN_SCREEN);
  };
  const gotoLogin = () => {
    navigate(SCREENS.LOGIN_SCREEN);
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="javascript:void(0)">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li
              className="nav-item"
              onClick={() => (isLogin ? logout() : gotoLogin())}
            >
              <a className="nav-link" href="javascript:void(0)">
                {isLogin ? "Logout" : "Login"}
              </a>
            </li>
          </ul>
          <SearchBox onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
