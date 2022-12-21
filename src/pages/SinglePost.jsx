import { useParams, useNavigate } from "react-router-dom";
import back from "../assets/pics/arrow-back.svg";
import posts from "../assets/store";

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="button-back">
        <button onClick={() => navigate(-1)}>
          <img src={back} alt="back" />
        </button>
      </div>
      {posts.map((post) => {
        if (post.id == id) {
          return (
            <div key={post.id} className="single-post">
              <h2>{post.title}</h2>
              <div className="single-subtext">
                <span className="single-data">{post.data}</span>
                <span className="single-type">{post.type}</span>
              </div>
              <p>{post.body}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SinglePost;
