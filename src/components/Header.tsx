import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {

  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <nav>
        <div className="desktop">
          <div className="logo">Usuário {user.name}</div>

          <div className="secondary full">
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/financeiro">Financeiro</Link>
            <Link to="/configuracao">Configuração</Link>
            <button className="link" onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;