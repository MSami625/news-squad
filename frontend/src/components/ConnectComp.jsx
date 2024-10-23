import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Advertisement from "./Advertisement";

const RightSidebar = () => {
  return (
    <div className="h-full">
      {/* Stay Connected Section */}
      <div className="mb-8">
        <h2 className="mb-4">
          <span className="text-white text-sm p-2  bg-black">
            STAY CONNECTED
          </span>
          <br className=""></br>
          <div className="pt-1">
  <hr className="border-black  pt-2 border-double" />
</div>

        </h2>

        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-blue-700" size={24} />
              <span>24,856 Fans</span>
            </div>
            <span className="text-sm font-semibold">LIKE</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaTwitter className="text-blue-500" size={24} />
              <span>3,913 Followers</span>
            </div>
            <span className="text-sm font-semibold">FOLLOW</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaYoutube className="text-red-600" size={24} />
              <span>22,100 Subscribers</span>
            </div>
            <span className="text-sm font-semibold">SUBSCRIBE</span>
          </li>
        </ul>
      </div>

      {/* Advertisement Section */}
      <Advertisement />
    </div>
  );
};

export default RightSidebar;
