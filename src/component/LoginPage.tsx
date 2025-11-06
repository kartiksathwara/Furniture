import { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await api.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    if (res.data.role === "admin") navigate("/admin");
    else navigate("/customer");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input className="w-full mb-3 p-2 border rounded" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Password" type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="bg-green-500 text-white w-full p-2 rounded">Login</button>
      </form>
    </div>
  );
}
