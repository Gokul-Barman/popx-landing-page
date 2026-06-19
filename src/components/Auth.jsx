import { Link } from 'react-router-dom'
function Auth() {
    
    return (
        
        <div className="mobile-div">
            <h1 className="font-bold text-2xl mb-2">Welcome to PopX</h1>
            <p className="pr-21 mb-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <Link to="/create-account" className=" text-center block mb-2 bg-blue-500 text-white py-2 w-full rounded font-medium hover:bg-blue-600 cursor-pointer">Create Account</Link>
            <Link to="/login" className=" text-center block mb-2 bg-pink-300 text-black py-2 w-full rounded font-medium hover:bg-pink-400 cursor-pointer">Already Registered? Login</Link>
        
        </div>
    )
}

export default Auth