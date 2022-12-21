import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import Work from "./pages/Work";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import SingleWork from "./pages/SingleWork";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<Blog />} />
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="works" element={<Work />} />
          <Route path="works/:id" element={<SingleWork />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
