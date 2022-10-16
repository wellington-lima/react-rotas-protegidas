import { useContext, useState } from "react";
import { IUser } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if(login(user.name, user.password)) {
      navigate("/home");
    }else {
      alert("Usuario ivalido");
    }
  }

  function updateUser(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser({...user, [name]: value})
  }

  return(
    <>
    <div className="container-login">
      <form action="" onSubmit={handleSubmit}>
        <div id="div-login">
          <input type="text" name="name" id="name" placeholder="user" onChange={(e) => updateUser(e)}/>
        </div>
        <br />
        <div>
          <input type="password" name="password" id="password" placeholder="password" onChange={(e) => updateUser(e)}/>
        </div>
        
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
</>
  )
}

export default Login;