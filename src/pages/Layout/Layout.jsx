import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import s from "./Layout.module.scss";

function Layout() {
  return (
    <div className={s.du}>
      <div>
        <Header />
      </div>
      <div style={{ paddingLeft: "170", width: "100" }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout;