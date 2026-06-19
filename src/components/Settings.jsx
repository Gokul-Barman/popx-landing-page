import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

function Settings() {
    const user = useAuthStore((state) => state.user);
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="p-8 text-center">
                <p className="mb-4">Please log in to view this page.</p>
                <button onClick={() => navigate("/login")} className="btn-css">Go to Login</button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen max-w-sm mx-auto border border-gray-300 pb-3 px-4 shadow-md bg-gray-100">
            <div className="bg-white py-4 -mx-4 px-4 mb-6">
                <h2 className="font-bold text-lg mb-4">Account Settings</h2>
            </div>
                        
            <div className="flex gap-4 items-center mb-6">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-700">
                    {user.fullName[0].toUpperCase()}
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">{user.fullName}</h3>
                    <p className="text-xs text-slate-500">{user.email}</p>
                </div>
                
            </div>
            <div className="flex-1">
                <p className="text-sm">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor invidunt Ut labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                <hr className="border-dashed border-gray-400 mt-4 -mx-4" />
            </div>
            <hr className=" border-dashed border-gray-400 my-6 -mx-4" />
        </div>
    );
}

export default Settings;