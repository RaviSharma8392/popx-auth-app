import Button from "../components/Button";
import { NavLink } from "react-router-dom";

export default function WelcomeScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Main Content Wrapper */}
      <div className="relative w-full h-screen bg-[#F7F8F9] p-2 flex flex-col justify-end md:justify-center md:items-center">
        {/* Card Container */}
        <div className="md:flex md:items-center md:gap-10 md:rounded-2xl md:p-20 md:shadow-2xl bg-[#F7F8F9]">
          {/* Illustration Section */}
          <div className="flex justify-center mb-6 md:mb-0">
            <img
              src="/welcome.png"
              alt="Welcome Illustration"
              className="w-[250px] md:w-[350px] object-contain"
            />
          </div>

          {/* Text & Buttons Section */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-[28px] md:text-[32px] font-bold mb-2 text-gray-900">
                Welcome to PopX
              </h1>
              <p className="text-gray-600 text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mx-2 md:mx-0 mb-10 md:mb-0">
              <NavLink to="/register">
                <Button
                  title="Create Account"
                  color="#6C63FF"
                  className="hover:shadow-lg"
                />
              </NavLink>
              <NavLink to="/login">
                <Button
                  title="Already Registered? Login"
                  color="#C9BFFF"
                  className="text-black hover:shadow"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
