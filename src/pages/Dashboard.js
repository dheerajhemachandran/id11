import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Header />
      </div>
    </>
  );
};

export default Dashboard;
