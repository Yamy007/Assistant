import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useEffect } from "react";
import { authActions } from "../redux/slice/authSlice";
import "./style.scss";

import { Header } from "../components/header/Header";
import {Footer} from "../components/footer/Footer"

export const MainLayouts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.getMe());
  }, []);

  return (
    <>
    <div className="w-screen h-screen flex flex-col color-bg">
      <Header />
      <main className="flex-grow overflow-y-auto w-full pb-24">
        <Outlet />
      </main>
      <div >
      <Footer />
      </div>
    </div>
  </>
  
  );
};
