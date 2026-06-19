import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

function SignUp() {
    const navigate = useNavigate();
    const signup = useAuthStore((state) => state.signup);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid}
    } = useForm({
        mode: "onChange",
        defaultValues:{isAgency:"no"}
    });
    
     const fullNameValue = watch("fullName") || "";
     const phoneValue = watch("phoneNumber") || ""; 
     const emailValue = watch("email") || "";
     const passwordValue = watch("password") || "";
     const isFormFilled = 
        fullNameValue.trim() !== "" && 
        phoneValue.trim() !== "" && 
        emailValue.trim() !== "" && 
        passwordValue.trim() !== ""; 

    const onSubmit = (data) => {
        signup(data);
        navigate("/settings");
    }

    return (
        <div className="flex flex-col gap-y-6 min-h-screen max-w-sm mx-auto border border-gray-300 px-4 shadow-md py-8 ">
            <h1 className="font-bold text-2xl pr-40">Create your PopX account</h1>
            <form className="flex flex-col flex-1 gap-y-5" onSubmit={handleSubmit(onSubmit)} >
                 <div className="relative">
                     <input type="fullName"
                     placeholder="Enter Full Name"
                     className="input-css" 
                     {...register("fullName", { required: "Full name is required"})}
                     />
                     {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                    <label  className="label-css" >Full Name<span className="text-red-500">*</span></label>
                  </div>
                   <div className="relative">
                     <input type="phoneNumber"
                     placeholder="Enter Phone Number"
                     className="input-css" 
                     {...register("phoneNumber", { 
                             required: "Phone number is required",
                            minLength: { value: 10, message: "Enter a valid phone number" }
                     })}
                     />
                     {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
                    <label  className="label-css" >Phone number<span className="text-red-500">*</span></label>
                  </div>
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
                    <label  className="label-css" >Email Address<span className="text-red-500">*</span></label>
                  </div>
                   <div className="relative">
                     <input type="password"
                     placeholder="Enter password"
                     className="input-css" 
                     {...register("password", { 
                            required: "Password is required",
                            minLength: { value: 8, message: "Password must be at least 8 characters long" }
                     })}
                     />
                     {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    <label  className="label-css" >Password<span className="text-red-500">*</span></label>
                  </div>
                   <div className="relative">
                     <input 
                     type="company"
                     autoComplete="new-password"
                     placeholder="Enter company name"
                     className="input-css" 
                     {...register("company")}
                     />
                    <label  className="label-css" >Company Name</label>
                  </div>
                  <div className="pt-2">
                        <span className="text-sm font-medium text-slate-800 block mb-2">
                            Are you an Agency?<span className="text-red-500">*</span>
                        </span>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                <input 
                                    type="radio" 
                                    value="yes" 
                                    {...register("isAgency")}
                                    className="w-4 h-4 text-purple-600 accent-purple-600"
                                /> Yes
                            </label>
                            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                <input 
                                    type="radio" 
                                    value="no" 
                                    {...register("isAgency")}
                                    className="w-4 h-4 text-purple-600 accent-purple-600"
                                /> No
                            </label>
                        </div>
                    </div>
                  <button  type="submit" disabled={!isFormFilled} className={`mt-auto ${isFormFilled?'btn-css':'btn-dis'}`}>Create Account</button>
            </form>
        </div>
    )
}
export default SignUp