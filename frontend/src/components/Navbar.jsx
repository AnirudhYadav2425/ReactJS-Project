import { IoCart } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import CartDrawer from "./CartDrawer";
import { useContext, useState } from "react";
import { GlobalAuthContext } from "../authContext/AuthContext";
import { AxiosInstance } from "../routes/axiosInstance";

const Navbar = () => {
  const [menuToggle, setMenuToggled] = useState(false);

  const { loggedInUser, setLoggedInUser, authUser } =
    useContext(GlobalAuthContext);
  console.log(loggedInUser);

  const toggleMenu = () => {
    setMenuToggled(!menuToggle);
  };

  // let accesstoken = localStorage.getItem("accesstoken");

  let navigate = useNavigate();

  const categories = [
    {
      id: "home",
      title: "Home",
      path: "/home",
    },
    {
      id: "products",
      title: "Products",
      path: "/products",
    },
    {
      id: "men",
      title: "Men",
    },

    {
      id: "women",
      title: "Women",
    },
    {
      id: "kids",
      title: "Kids",
    },
    {
      id: "footware",
      title: "Footware",
    },
    {
      id: "accessories",
      title: "Accessories",
    },
    {
      id: "search",
      title: "Search",
    },
  ];

  const handleLogout = async () => {
    try {
      let res = await AxiosInstance.post("/user/logout");
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        setLoggedInUser(false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("logout failed");
    }
  };

  function stringAvatar(name) {
    let word = name.split(" ");
    if (word.length >= 2) {
      return {
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
      };
    }
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }

  return (
    <nav className="absolute top-0 h-[70px] w-full bg-white flex items-center justify-between px-6 shadow z-50">
      <div className="font-extrabold text-3xl text-black   select-none">
        MyApp
      </div>

      {loggedInUser ? (
        <>
          <section className="flex gap-2">
            {categories.map((ele) => {
              return (
                <Link to={ele.path ? ele.path : "/home"}>
                  <div key={ele.id} className="p-4 font-semibold">
                    {ele.title}
                  </div>
                </Link>
              );
            })}
          </section>
        </>
      ) : null}

      <aside className="flex gap-4 font-semibold">
        {loggedInUser ? (
          <>
            <button>
              <CartDrawer />
            </button>

            <div className="relative" onClick={toggleMenu}>
              <Avatar
                sx={{ bgcolor: "black" }}
                className="uppercase"
                {...stringAvatar(authUser.userName)}
              />

              {menuToggle ? (
                <>
                  <div className="absolute min-w-40 p-2 right-0 bg-white rounded shadow-lg top-12 z-50 border border-gray-200">
                    <ul className="flex flex-col gap-2">
                      <li
                        onClick={handleLogout}
                        className="hover:bg-gray-100 px-2 py-1 cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="bg-white text-black px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition font-bold border focus:outline-none focus:ring-2 focus:ring-blue-400">
                Login
              </button>
            </Link>

            <Link to={"/"}>
              <button className="bg-black text-white px-6 py-2 rounded-lg shadow transition font-bold border  focus:outline-none focus:ring-2 focus:ring-blue-200">
                Signup
              </button>
            </Link>
          </>
        )}
      </aside>
    </nav>
  );
};

export default Navbar;
