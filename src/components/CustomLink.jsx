import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });
  return (
    <Link to={to} style={{ color: match ? "#FF6464" : "#000000" }}>
      {children}
    </Link>
  );
};

export default CustomLink;
