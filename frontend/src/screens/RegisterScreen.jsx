import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RagisterScreen = () => {
  const api = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post(`${api}/auth/signup`, formData);

      const { fullName, email, phoneNumber, companyName, agency } = formData;
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ fullName, email, phoneNumber, companyName, agency })
      );

      navigate("/account");
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      setErrorMsg(msg);
      console.error("Error:", msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8F9] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col space-y-3">
        <h1 className="text-[28px] font-bold  text-[#1D2226]">
          Create your <br /> PopX account
        </h1>

        {/* Full Name */}
        <div>
          <label className="text-sm text-[#6C25FF] font-medium mb-1 block">
            Full Name<span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border  border-gray-300 rounded-md p-[8px] w-full"
            placeholder="Full Name"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-sm text-[#6C25FF] font-medium mb-1 block">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border  border-gray-300 rounded-md p-[8px] w-full"
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-[#6C25FF] font-medium mb-1 block">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-[8px] w-full"
            placeholder="Email"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-[#6C25FF] font-medium mb-1 block">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-[8px] w-full"
            placeholder="Password"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="text-sm text-[#6C25FF] font-medium mb-1 block">
            Company name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-[8px] w-full"
            placeholder="Company Name"
          />
        </div>

        {/* Are you an Agency? */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
                className="accent-[#6C25FF]"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
                className="accent-[#6C25FF]"
              />
              <span>No</span>
            </label>
          </div>
        </div>
        {errorMsg && (
          <div className="bg-red-100 text-red-700 border border-red-300 rounded-md p-2 text-sm">
            {errorMsg}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          title={loading ? "Creating Account..." : "Create Account"}
          className="w-full py-2 bg-[#6C25FF] text-white rounded-md hover:bg-purple-700 transition"
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default RagisterScreen;
