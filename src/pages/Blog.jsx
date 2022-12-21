import { Link } from "react-router-dom";
import posts from "../assets/store";

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="blog-title">
        <h2>Blog</h2>
      </div>
      <div className="blogs">
        {posts.map((post) => (
          <div key={post.id} className="blog">
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <div className="blogs-types">
              <span className="blogs-data">{post.data} | </span>
              <span className="blogs-type">{post.type}</span>
            </div>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
