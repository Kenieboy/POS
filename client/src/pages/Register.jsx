import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { registerAPI } from "../features/auth/authAPI";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerAPI(form);

      console.log(res.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <AuthLayout title="Create your account">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">Full Name</label>

          <input
            type="text"
            name="name"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>

          <input
            type="email"
            name="email"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Password</label>

          <input
            type="password"
            name="password"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
          />
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
          Register
        </button>

        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Register;
