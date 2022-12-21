import { Link } from "react-router-dom";
import posts from "../assets/store";

const Posts = () => {
  return (
    <div className="posts-content">
      <div className="posts-text">
        <h2>Recent posts</h2>
        <Link to="/posts">View All</Link>
      </div>{" "}
      <div className="posts-view">
        {posts
          .filter((post) => post.id <= 2)
          .map((post) => (
            <div className="post" key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <div>
                <span>
                  {post.data} | {post.type}
                </span>
              </div>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
