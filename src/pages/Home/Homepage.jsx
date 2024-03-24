import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar.jsx/Sidebar";

const Homepage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Sidebar />
      <Outlet></Outlet>
    </div>
  );
};

export default Homepage;
