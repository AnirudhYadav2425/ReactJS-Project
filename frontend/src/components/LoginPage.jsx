import React, { useState, useContext } from "react";
import { useApi } from "../utilities/utilities";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../routes/axiosInstance";
import { GlobalAuthContext } from "../authContext/AuthContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setLoggedInUser } = useContext(GlobalAuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      let response = await AxiosInstance.post("/user/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(response);
      if (response.data.success) {
        setLoggedInUser(true);
        toast.success(response.data.message)
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="font-bold text-4xl text-center text-black mb-4">
          Login
        </h1>
        <form>
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

          <div className="flex flex-col gap-1 mb-7">
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
            onClick={login}
            className="w-full bg-black text-white font-semibold py-2 rounded-lg shadow  transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
