import React, { useState, useContext } from "react";
import LoginForm from "../LgoinForm";
import Navigation from "./Navigation";
import styles from "../../styles/Home.module.css";
import classNames from "classnames";
import AuthContext from "../../contexts/auth";

const RenderPropSample = ({ children }) => {
  return <div>결과 : {children(5)}</div>;
};

function AppLayout({ children }) {
  // const [isLogined, setIsLogined] = useState(false);
  const { isLogined, handleSetLogIn, handleSetLogOut } =
    useContext(AuthContext);

  const LoginFormWapper = () => {
    return (
      <main className="bg-gray-100">
        <LoginForm
          isLogined={isLogined}
          handleSetLogIn={handleSetLogIn}
        ></LoginForm>
      </main>
    );
  };

  const MainWapper = () => {
    return (
      <main className="bg-gray-100 ">
        <div className="flex">
          <Navigation
            isLogined={isLogined}
            handleSetLogOut={handleSetLogOut}
          ></Navigation>
          <div className="w-full h-screen overflow-y-auto">
            <div
              className={classNames(
                styles.container,
                "flex",
                "flex-wrap",
                "space-x-6"
              )}
            >
              <section className="flex-1 w-full my-4">{children}</section>
              <section className="flex-1 w-full my-4">
                <div className="border p-4 my-4 bg-white"></div>
              </section>
            </div>
          </div>
        </div>
      </main>
    );
  };

  return isLogined ? <MainWapper /> : <LoginFormWapper />;
}

export default AppLayout;
