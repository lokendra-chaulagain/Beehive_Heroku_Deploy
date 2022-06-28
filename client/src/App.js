import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Blogs from "./pages/blogs/Blogs";
import BlogRead from "./pages/blogRead/BlogRead";
import JobPostCreate from "./pages/jobPostCreate/JobPostCreate";
import JobSearchFeed from "./pages/jobSearchFeed/JobSearchFeed";
import JobPostRead from "./pages/JobPostRead/JobPostRead";
import Trending from "./pages/trending/Trending";
import Bookmark from "./pages/bookmark/Bookmark";
import JobEdit from "./pages/jobEdit/JobEdit";
import BlogEdit from "./pages/blogEdit/BlogEdit";
import Home from "./pages/home/Home";
import BlogCreate from "./pages/blogCreate/BlogCreate";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profileEdit/ProfileEdit";
import FeedPostEdit from "./pages/feedPostEdit/FeedPostEdit";
import Settings from "./pages/settings/Settings";
import Categories from "./pages/categories/Categories";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/profile/:id" element={user ? <Profile /> : <Login />} />
          <Route path="/blogs" element={user ? <Blogs /> : <Login />} />
          <Route
            path="/blogRead/:id"
            element={user ? <BlogRead /> : <Login />}
          />
          <Route
            path="/blogCreate"
            element={user ? <BlogCreate /> : <Login />}
          />
          <Route
            path="/jobCreate"
            element={user ? <JobPostCreate /> : <Login />}
          />
          <Route
            path="/jobSearch"
            element={user ? <JobSearchFeed /> : <Login />}
          />
          <Route path="/trending" element={user ? <Trending /> : <Login />} />
          <Route
            path="/jobPost/:id"
            element={user ? <JobPostRead /> : <Login />}
          />
          <Route path="/bookmark" element={user ? <Bookmark /> : <Login />} />
          <Route path="/jobEdit/:id" element={user ? <JobEdit /> : <Login />} />
          <Route
            path="/blogEdit/:id"
            element={user ? <BlogEdit /> : <Login />}
          />
          <Route
            path="/profileEdit"
            element={user ? <ProfileEdit /> : <Login />}
          />
          <Route
            path="/postEdit/:id"
            element={user ? <FeedPostEdit /> : <Login />}
          />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
          <Route
            path="/category/:catName"
            element={user ? <Categories /> : <Login />}
          />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
