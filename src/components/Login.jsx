import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

function Login() {
    const login = useAuthStore((state) => state.login);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid}
    } = useForm({mode: "onChange"});
    const navigate = useNavigate();

    const emailValue = watch("email") || "";
    const passwordValue = watch("password") || "";
    const isFormFilled = emailValue.trim() !== "" && passwordValue.trim() !== "";

    const onSubmit = (data) => {
        const result = login(data.email, data.password);
        if(result.success) {
             navigate("/settings");
        } else {
            alert(result.message);
        }
    }

    return (
        <div className="flex flex-col gap-y-5 min-h-screen max-w-sm mx-auto border border-gray-300 px-4 shadow-md py-8 ">
            <h1 className="font-bold text-2xl pr-40">Signin to your PopX account</h1>
            <p className="pr-21 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} >
                <div className="relative">
                     <input type="email"
                     placeholder="Enter email address"
                     className="input-css" 
                     {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                     })}
                     />
                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    <label  className="label-css" >Email Address</label>
                  </div>
            
                <div className="relative">
                    <input 
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter password"
                    className="input-css"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 8, message: "Password must be 8 characters long"}
                    })} 
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    <label className="label-css">Password</label>
                </div>
                <button  type="submit" disabled={!isFormFilled} className={isFormFilled?'btn-css':'btn-dis'}>Login</button>
            </form>            
        </div>

    ) 
}
export default Login