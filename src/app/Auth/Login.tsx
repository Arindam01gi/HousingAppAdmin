import "./login.css";
import login from "../../assets/images/login.svg";

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 container h-screen">
      <div className="w-6/12 h-4/6 flex shadow-lg bg-white ">
        <div className="w-6/12 bg-blue-100 flex justify-center items-center">
          <img src={login} alt="login" />
        </div>
        <div className="ml-8 w-6/12 flex  flex-col justify-center items-start">
          <div className="font-medium text-xl"> Login to your account</div>
          <form className="bg-white w-full ">
            <div className="mt-12 " 
            // style={{ border: "1px solid black" }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow border rounded w-10/12 py-2 px-3 text-gray-700 "
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mt-6 ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow  w-10/12 border rounded  py-2 px-3 text-gray-700 mb-3"
                id="password"
                type="password"
                placeholder="password"
              />
            </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-10/12 mt-6 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log In
              </button>
              {/* <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
