import { createContext, useState } from "react";

export interface IUser {
  id: number,
  name: string;
  password: string,
  perfil: string[]
}

interface IAuthContext {
  user: IUser;
  login(name: string, password: string): boolean; 
  logout(): void; 
}

const systemUsers = [ 
  { id: 1, name: "admin", password: "123456", perfil: ['administrador', 'financeiro'] },
  { id: 2, name: "financeiro", password: "123456", perfil: ['financeiro']},
  { id: 3, name: "normal", password: "123456", perfil: []}
];

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({children}: any) => {
  const [userData, setUserData] = useState<IUser>(() => {
    const user = localStorage.getItem('user');

    if(user) {
      return JSON.parse(user);
    }

    return {} as IUser
  });

  const login = (name: string, password: string) => {
    const userExists = systemUsers.filter(sysUser =>  {
      if(sysUser.name == name && sysUser.password == password) {
        return sysUser
      }
    });

    if(userExists.length > 0) {
      localStorage.setItem('user', JSON.stringify(userExists[0]));
      setUserData(userExists[0]);
      return true;
    }

    return false;
  }

  const logout = () => {
    localStorage.removeItem('user');
    setUserData({} as IUser);
  }

  return(
    <AuthContext.Provider value={{ user: userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }

export default AuthContext;
