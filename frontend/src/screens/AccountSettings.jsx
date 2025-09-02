import React from "react";

const AccountSettings = () => {
  const userData = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="min-h-screen md:items-center bg-[#F7F8F9] flex justify-center items-start">
      <div className="w-full max-w-md bg-[#F7F8F9] md:rounded-md shadow-sm">
        {/* Header */}
        <div className="shadow border-b bg-white border-gray-200 h-[68px] flex items-center px-[15px]">
          <h2 className="text-[18px] font-medium text-[#1D2226]">
            Account Settings
          </h2>
        </div>

        {/* Profile Card */}
        <div className="px-4 py-4 flex items-start space-x-3">
          {/* Avatar */}
          <div className="relative">
            <img
              src="/Ellipse 114@2x.png"
              alt="Profile"
              className="w-[76px] h-[76px] rounded-full object-cover"
            />
            {/* Purple Badge */}
            <img
              src="/image.png"
              alt="Badge"
              className="absolute bottom-0 right-0 w-[21px] h-[23px]"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[15px] font-semibold text-gray-800 leading-tight">
              {userData?.fullName || "Marry Doe"}
            </h3>

            <p className="text-[14px] md:text-[16px] font-normal text-[#1D2226] leading-none">
              {userData?.email || "Marry@Gmail.Com"}
            </p>
          </div>
        </div>

        {/* Description */}
        <div
          className="mt-2 px-[16px] text-left text-[#1D2226] 
                        text-[14px] leading-[22px] font-normal 
                        capitalize font-[Rubik]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>

        {/* Divider with spacing */}
        <div className="h-10 mt-6 border-b border-dashed border-gray-400" />
      </div>
    </div>
  );
};

export default AccountSettings;
