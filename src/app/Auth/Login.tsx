import "./login.css";
import login from "../../assets/images/login.svg";
import {  useState } from "react";

const generateRandomCode = () => {
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const codeLength = 4;
  let code = "";
  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  return code;
};

const Login = () => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [generatedCode, setGeneratedCode] = useState(generateRandomCode());



  const handleInputChange = (e: any) => {
    setCaptchaValue(e.target.value.toUpperCase());
  };

  const handleRefreshCaptcha = () => {
    setGeneratedCode(generateRandomCode());
    setCaptchaValue("");
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 container h-screen">
      <div className="w-6/12 h-4/6 flex shadow-lg bg-white ">
        <div className="w-6/12 bg-blue-100 flex justify-center items-center">
          <img src={login} alt="login" />
        </div>
        <div className="ml-8 w-6/12 flex  flex-col justify-center items-start">
          <div className="font-medium text-xl"> Login to your account</div>
          <form className="bg-white w-full ">
            <div className="mt-12 ">
              <input
                className="shadow border rounded w-10/12 py-2 px-3 text-gray-700 "
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mt-6 ">
              {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label> */}
              <input
                className="shadow  w-10/12 border rounded  py-2 px-3 text-gray-700 mb-3"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mt-3 ">
              <input
                className="shadow  w-10/12 border rounded  py-2 px-3 text-gray-700 mb-3"
                id="society_code"
                type="society_code"
                placeholder="Society code"
              />
            </div>
            <div className="mt-3 flex">
              <input
                className="shadow border rounded w-4/12 py-2 px-3  text-gray-700 "
                id="captcha"
                type="text"
                placeholder="Captcha"
                value={captchaValue}
                onChange={handleInputChange}
              />
              <input
                className="shadow border rounded w-3/12 py-2 px-3 ml-3 text-gray-700 bg-gray-200 "
                type="text"
                value={generatedCode}
                readOnly
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m rounded ml-4 w-2/12 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleRefreshCaptcha}
              >
                <i className="fa-solid fa-arrows-rotate text-white"></i>
              </button>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-10/12 mt-8 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
