import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const ProfileInfoCard = () => {
    const { user, clearUser } = useContext(UserContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/");
    }
    return (
        user && (
            <div className="flex items-center ">
                <img
                    src={user.profileImageUrl}
                    alt=""
                    className="w-13 h-13 bg-gray-300 rounded-full mr-3"
                />
                <div>
                    <div className="text-[20px] text-black font-bold leading-3">
                        {user.name || ""}
                    </div>
                    <button
                        className="text-amber-600 text-m font-semibold cursor-pointer hover:underline mt-1"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        )
    )
}

export default ProfileInfoCard