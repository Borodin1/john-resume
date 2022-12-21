import fb from "../assets/pics/footer/fb.png";
import insta from "../assets/pics/footer/insta.png";
import linkedin from "../assets/pics/footer/Linkedin.png";
import twitter from "../assets/pics/footer/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="https://facebook.com">
          <img src={fb} alt="fb" />
        </a>
        <a href="https://instagram.com">
          <img src={insta} alt="instagram" />
        </a>
        <a href="https://linkedin.com">
          <img src={linkedin} />
        </a>
        <a href="https://twitter.com">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
      <div className="footer-text">
        <p>Copyright ©2020 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
