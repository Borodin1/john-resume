import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import CustomLink from "./CustomLink";

const Layout = () => {
  return (
    <>
      <div className="header">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/works">Works</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </div>

      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
