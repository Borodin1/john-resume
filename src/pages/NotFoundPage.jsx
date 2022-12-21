import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="nfp-title">
      <h2>
        We don't found your link. <Link to="/">Go Home</Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
