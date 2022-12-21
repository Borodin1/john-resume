import { useParams, useNavigate } from "react-router-dom";
import works from "../assets/works";
import back from "../assets/pics/arrow-back.svg";

const SingleWork = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="button-back">
        <button onClick={() => navigate(-1)}>
          <img src={back} alt="back" />
        </button>
      </div>
      {works.map((work) => {
        if (work.id == id) {
          return (
            <div key={work.id} className="single-work">
              <div className="swork-main">
                <h2>{work.title}</h2>
                <div className="swork-subtext">
                  <span className="swork-data">{work.year}</span>
                  <span className="swork-type">{work.type}</span>
                </div>
                <p>{work.body}</p>
              </div>
              <img src={work.materials.pic1} alt={work.body} />
              <div className="swork-material">
                <h3>Heading 1</h3>
                <h4>Heading 2</h4>
                <p>{work.body}</p>
                <img src={work.materials.pic2} />
                <img src={work.materials.pic3} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SingleWork;
