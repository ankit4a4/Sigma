import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeaderTop = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[#262B40] text-white px-4 py-2">
      <div className="max-w-screen-xl mx-auto border-b border-gray-600  flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Location, Phone, Time */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#B49C6A]" />
            <span>456, Lorem Street, USA</span>
          </div>
          <div className="flex">
            <div className="flex items-center gap-2 border-l-0 md:border-l border-gray-400 pl-4">
              <FaPhoneAlt className="text-[#B49C6A]" />
              <span>(+00)888.666.88</span>
            </div>
            <div className="flex items-center gap-2 border-l-0 md:border-l border-gray-400 pl-4">
              <FaClock className="text-[#B49C6A]" />
              <span>9AM - 9PM</span>
            </div>
          </div>
        </div>

        {/* Right Section: Free Consulting Button */}
        <button onClick={() => navigate('/contact')} className="border mt-2 md:mt-0 border-[#B49C6A] text-white px-4 py-1 cursor-pointer mb-2 rounded-full hover:bg-[#B49C6A] hover:text-black transition">
          Free Consulting
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
