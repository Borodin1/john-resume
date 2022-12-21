import { Link } from "react-router-dom";
import works from "../assets/works";

const Prework = () => {
  return (
    <div>
      <div className="work-homepage">
        <h2>Featured works</h2>
      </div>
      <div className="works">
        {works
          .filter((work) => work.id <= 3)
          .map((work) => (
            <div key={work.id} className="work">
              <div className="work-pic">
                <Link to={`/works/${work.id}`}>
                  <img src={work.pic} alt={work.title} />
                </Link>
              </div>
              <div className="work-content">
                <Link to={`/works/${work.id}`}>
                  <h2>{work.title}</h2>
                </Link>
                <div className="work-subtext">
                  <span className="work-data">{work.year}</span>
                  <span className="work-type">{work.type}</span>
                </div>
                <p>{work.body}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Prework;
