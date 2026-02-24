import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loginUser } from "../store/thunks/clientThunks"; 
import { toast } from "react-toastify"; 

function Login() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(false);


  const onSubmit = async (data) => {
    try {
      setLoading(true);
     
      await dispatch(loginUser(data, data.remember, history, location));
      toast.success("Giriş başarılı!");
    } catch (err) {
      toast.error("E-posta veya şifre hatalı!");
    } finally {
      setLoading(false);
    }
  };
 const token = useSelector(state => state.client.token);


console.log("LOGIN PAGE TOKEN:", token);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email hatalı!"
                }
              })}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
                ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              placeholder="******"
              {...register("password", { required: "Password is required" })}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
                ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"}`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                {...register("remember")}
                className="mr-2 accent-blue-600"
              />
              Remember me
            </label>
          </div>

         
          <button
            type="submit"
            disabled={!isValid || loading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium transition duration-200
              ${!isValid || loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Hesap oluştur{" "}
          <span
            onClick={() => history.push("/signup")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;