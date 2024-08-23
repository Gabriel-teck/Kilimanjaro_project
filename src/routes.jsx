import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Globallayout from "./components/GlobalComponents/Globallayout";
import Home from "./pages/Home";
import Location from "./pages/Location";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login, { action as loginAction } from "./pages/Login";
import Signup, { action as signupAction } from "./pages/Signup";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Menu from "./pages/menus/menu-components/Menu";
import { Profile } from "./pages/profile/Profile";
import { UpdatePassword } from "./pages/profile/UpdatePassword";
import { UpdateAccount } from "./pages/profile/UpdateAccount";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Globallayout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/update-password" element={<UpdatePassword />} />
      <Route path="profile/update-account" element={<UpdateAccount />} />
      <Route path="location" element={<Location />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="signup" element={<Signup />} action={signupAction} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="menu" element={<Menu />} />
    </Route>
  )
);
