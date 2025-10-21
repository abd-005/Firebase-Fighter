import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { use } from "react";
// import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
// import { ClockLoader } from "react-spinners";
// import MyLink from "./MyLink";

const Navbar = () => {
//   const result = useContext(AuthContext);
//   const { user, signoutUserFunc, setUser, loading, setLoading } =
//     use(AuthContext);
//   console.log(user);

  const handleSignout = () => {
//     signoutUserFunc()
//       .then(() => {
//         toast.success("Signout successful");
//         setUser(null);
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
  console.log("HandleSignout");
  };

//   console.log(loading);

  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about-us"}>About US</MyLink>
          </li>
          {(
            <li>
              <MyLink to={"/profile"}>Profile</MyLink>
            </li>
          )}
        </ul>
      </MyContainer>
    </div>
  );
};

export default Navbar;