import { Link } from "react-router-dom";
import photo from "../assets/pics/photo.png";
import Posts from "./Posts";
import Prework from "./Prework";

const HomePage = () => {
  return (
    <>
      <div className="homepage-content">
        <div className="homepage-title">
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Link to="/download" className="homepage-button">
            Download Resume
          </Link>
        </div>
        <div className="homepage-image">
          <img src={photo} alt="photoPic" />
        </div>
      </div>
      <Posts />
      <Prework />
    </>
  );
};

export default HomePage;
