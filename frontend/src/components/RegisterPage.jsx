import { useState } from "react";
import { toast } from "react-toastify";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const validateInputs = (data) => {
  //   let { username, email, password, confirmpassword } = data;
  //   if (username.trim() === "") {
  //     toast.error("enter username");
  //     return false;
  //   } else if (username.trim().length < 6) {
  //     toast.error("username should be atleast 6 characters");
  //     return false;
  //   } else if (email.trim() === "") {
  //     toast.error("Enter email");
  //     return false;
  //   } else if (password.trim().length < 8) {
  //     toast.error("password should be atleast 8 characters");
  //     return false;
  //   } else if (confirmpassword.trim() !== password.trim()) {
  //     toast.error("password mismatch");
  //     return false;
  //   } else {
  //     console.log("Good to go");
  //     return true;
  //   }
  // };

  const register = async (e) => {
    e.preventDefault();
    try {
      let response = await AxiosInstance.post("/user/register", {
        userName: formData.username,
        email: formData.email,
        password: formData.password,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error While Registering");
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 mt-17">
        <h1 className="font-bold text-4xl text-center text-black mb-3">
          Register
        </h1>
        <form>
          <div className="flex flex-col gap-1 mb-3">
            <label
              htmlFor="username"
              className="font-semibold text-sm text-gray-700"
            >
              Username
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label
              htmlFor="email"
              className="font-semibold text-sm text-gray-700"
            >
              Email
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label
              htmlFor="password"
              className="font-semibold text-sm text-gray-700"
            >
              Password
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="off"
            />
          </div>

          <button
            onClick={register}
            className="w-full bg-black text-white font-semibold py-2 rounded-lg shadow "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
