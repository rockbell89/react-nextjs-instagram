import { type } from "os";
import { createContext, useState } from "react";

const AuthContext = createContext({
  isLogined: true,
  handelSetLogIn: (e: EventTarget) => {},
  handelSetLogOut: (e: EventTarget) => {},
});

const AuthProvider = ({ children }) => {
  const [isLogined, setIsLogined] = useState(false);

  const handelSetLogIn = () => {
    console.log("로그인");
    setIsLogined((isLogined) => !isLogined);
  };
  const handelSetLogOut = () => {
    console.log("로그아웃");
    setIsLogined((isLogined) => !isLogined);
  };

  const value = {
    isLogined,
    handelSetLogIn,
    handelSetLogOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const { Consumer: AuthConsumer } = AuthContext;
export { AuthProvider, AuthConsumer };

export default AuthContext;
