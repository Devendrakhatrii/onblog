import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { Notfound } from "./pages/Notfound";
import UserLayout from "./layouts/UserLayout";
import About from "./pages/About";
import Blogs from "./pages/blogs/Blogs";
import BlogDetails from "./pages/blogs/BlogDetails";
import Contact from "./pages/Contact";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyPassword from "./pages/VerifyPassword";
import { Toaster } from "react-hot-toast";
import Bookmarks from "./pages/Bookmarks";
import AdminNavbar from "./layouts/AdminNavbar";
import Users from "./pages/admin/Users";
import AdminHome from "./pages/admin/AdminHome";
import AdminBlogs from "./pages/admin/AdminBlogs";
// import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";
import { Setting } from "./pages/Setting";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-password" element={<VerifyPassword />} />
        <Route path="/" element={<LandingPage />} />

        <Route path="/users" element={<UserLayout />}>

          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Setting />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
        </Route>

        <Route path="/admin" element={<AdminNavbar />}>
          <Route path="home" element={<AdminHome />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
