import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Tweets from "../pages/Tweets";
import NewTweet from "../pages/NewTweet";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import RequiresAuth from "./RequiresAuth";
import Authenticated from "./Authenticated";
import Logout from "./Logout";
import NavbarPublic from "./NavbarPublic";
import Navbar from "./Navbar";

function Router() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Authenticated>
            <NavbarPublic />
            <Login />
          </Authenticated>
        }
      />
      <Route
        path="/signup"
        element={
          <Authenticated>
            <NavbarPublic />
            <SignUp />
          </Authenticated>
        }
      />
      <Route
        path="/new-tweet"
        element={
          <RequiresAuth>
            <Navbar />
            <NewTweet />
          </RequiresAuth>
        }
      />

      <Route
        path="/tweets"
        element={
          <RequiresAuth>
            <Navbar /> <Tweets />
          </RequiresAuth>
        }
      />
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="*" element={<NotFound />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default Router;
