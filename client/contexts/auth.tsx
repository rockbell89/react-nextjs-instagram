import { useRouter } from "next/router";
import { createContext, useState } from "react";

const AuthContext = createContext({
  isLogined: false,
  handleSetLogIn: (e: EventTarget) => {},
  handleSetLogOut: (e: EventTarget) => {},
});

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [isLogined, setIsLogined] = useState(false);

  const handleSetLogIn = () => {
    console.log("로그인");
    setIsLogined((isLogined) => !isLogined);
    router.push("/");
  };
  const handleSetLogOut = () => {
    console.log("로그아웃");
    setIsLogined((isLogined) => !isLogined);
    router.push("/");
  };

  const value = {
    isLogined,
    handleSetLogIn,
    handleSetLogOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const { Consumer: AuthConsumer } = AuthContext;
export { AuthProvider, AuthConsumer };

export default AuthContext;
