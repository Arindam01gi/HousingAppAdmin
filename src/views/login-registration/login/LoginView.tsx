import "./login.css";
import login from "../../../assets/images/login.svg";
import design from "../../../assets/images/design.svg";
import logogif from "../../../assets/images/logogif.gif";
import { useState } from "react";
import { generateRandomCode } from "../../../utils";
import { useForm } from "react-hook-form";
import CustomInput from "../../../library/CustomInput";
import { emailValidator, requiredValidator } from "../../../validators";

const LoginView = ({ loginAdmin }: LoginViewProps) => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: "all",
  });
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
    <>
      <nav className="relative">
        <div className="absolute top-2 left-0">
          <img
            src={design}
            className="w-[240px] h-[80px] object-cover"
            alt="Neighbourhood Logo"
          />
        </div>
      </nav>
      <div className="flex justify-between p-8">
        <div className="ml-16 w-6/12 flex  flex-col justify-center my-48 ">
          <div className="font-medium text-xl">Welcome Back, Admin</div>
          <div className="font-small text-sm mt-2 text-gray-400">
            Login to your account
          </div>
          <form className="bg-white w-full ">
            <div className="mt-8 ">
              <CustomInput
                rules={{ ...requiredValidator, ...emailValidator }}
                name="admin_email"
                control={control}
                defaultValue={null}
                errors={errors}
                className="shadow w-6/12 border rounded  py-2 px-3 text-gray-700 mb-3"
                type="email"
                placeholder="Email Address*"
              />
            </div>
            <div className="mt-6 ">
              <CustomInput
                rules={{ ...requiredValidator }}
                name="admin_password"
                control={control}
                defaultValue={null}
                value={null}
                errors={errors}
                className="shadow w-6/12 border rounded  py-2 px-3 text-gray-700 mb-3"
                type="password"
                placeholder="Password*"
              />
            </div>
            <div className="mt-3 ">
              <CustomInput
                rules={{ ...requiredValidator }}
                name="apt_code"
                control={control}
                defaultValue={null}
                errors={errors}
                className="shadow w-6/12 border rounded  py-2 px-3 text-gray-700 mb-3"
                type="text"
                placeholder="Society code*"
              />
            </div>
            <div className="mt-3 flex">
              <input
                className="shadow border rounded w-2/12 py-2 px-3  text-gray-700 "
                id="captcha"
                type="text"
                placeholder="Captcha"
                value={captchaValue}
                onChange={handleInputChange}
              />
              <input
                className="shadow border rounded w-2/12 py-2 px-3 ml-3 text-gray-700 bg-gray-200 "
                type="text"
                value={generatedCode}
                readOnly
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded ml-12 w-1/12 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleRefreshCaptcha}
              >
                <i className="fa-solid fa-arrows-rotate text-white"></i>
              </button>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-6/12 mt-8 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit(loginAdmin)}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center w-6/12">
          <div className="">
            <img src={logogif} alt="" className="w-6/12 bg-gray-700" style={{borderRadius:"50%"}} />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginView;

export interface LoginViewProps {
  loginAdmin: any;
}
