import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function LoginScreen() {
  const api = import.meta.env.VITE_API_URL;

  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /* handelsumbitFunction */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("Email and password are required.");
      return;
    }
    const credentials = {
      email: email,
      password: password,
    };

    try {
      setLoading(true);

      const res = await axios.post(`${api}/auth/login`, credentials);

      window.alert(res.data.message);

      const { fullName, email, phoneNumber, companyName, agency } =
        res.data.user;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({ fullName, email, phoneNumber, companyName, agency })
      );

      navigate("/account");
    } catch (error) {
      if (error) {
        console.log("Caught error:", error);
      } else {
        console.log("Caught an unknown error");
      }
      setErrorMsg(error?.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex  md:items-center justify-center px-4">
      {/* Responsive Container */}
      <div className="w-full  my-[40px] max-w-sm">
        {/* Heading */}
        <h2 className="text-[28px] font-bold text-gray-900 leading-snug">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-gray-500 text-[18px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Form */}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-purple-600">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border-[1px] border-[#CBCBCB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-purple-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border-[1px] border-[#CBCBCB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {errorMsg && (
            <div className="bg-red-100 text-red-700 border border-red-300 rounded-md p-2 text-sm">
              {errorMsg}
            </div>
          )}

          {/* Login Button */}

          <Button
            type="submit"
            title={loading ? "Logging in..." : "Login"}
            color="#CBCBCB"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
}
