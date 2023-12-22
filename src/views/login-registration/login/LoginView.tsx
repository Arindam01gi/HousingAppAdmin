import "./login.css";
import logogif from "../../../assets/images/Community-amico.png";
import { useState } from "react";
import { generateRandomCode } from "../../../utils";
import { useForm } from "react-hook-form";
import CustomInput from "../../../library/CustomInput";
import { emailValidator, requiredValidator } from "../../../validators";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
  const [errorMessage,setErrorMessage] = useState<string|null>("");

  const handleInputChange = (e: any) => {
    setCaptchaValue(e.target.value.toUpperCase());
  };

  const handleRefreshCaptcha = () => {
    setGeneratedCode(generateRandomCode());
    setCaptchaValue("");
  };

  const validateCaptcha = () =>{
    return captchaValue.toUpperCase() === generatedCode.toUpperCase();
  }

  const handleLogin = (e:any) =>{
    e.preventDefault();
    if(validateCaptcha()){
      console.log("click")
      handleSubmit(loginAdmin)();
    }else{
      setErrorMessage("Inavalid Captcha")
    }
  }

  return (
    <>
      <nav
        className="relative mx-10"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="mt-3">
          {/* <img
            src={design}
            className="w-[240px] h-[80px] object-cover"
            alt="Neighbourhood Logo"
          /> */}
          <span
            style={{
              fontSize: 25,
              borderBottomWidth: 4,
              padding: 10,
              borderColor: "#3b81f6",
            }}
          >
            Admin Pannel
          </span>
        </div>
        <div className="mt-3">
          <i className="fa-solid fa-phone text-blue-500 "></i>
          <span className="ml-2">Contact us</span>
          <span className="ml-8 font-bold text-lg">NeighborHood Team</span>
        </div>
      </nav>
      <div className="flex justify-between px-8">
        <div className="ml-16 w-6/12 flex  flex-col justify-center my-40 ">
          <div className="font-sm text-xl" style={{ fontSize: 35 }}>
            Admin excellence, at your fingertips.
          </div>
          <div className="font-sm text-xl mt-3" style={{ fontSize: 35 }}>
            Welcome Back, Admin.
          </div>
          <div className="font-small text-md mt-2 text-gray-400 mt-4">
            Login to your account
          </div>
          <form className="bg-white w-full ">
            <div className="mt-8 ">
              <CustomInput
                rules={{ ...requiredValidator, ...emailValidator }}
                name="admin_email"
                control={control}
                defaultValue={""}
                errors={errors}
                className="shadow w-6/12 border rounded  py-2 px-3 text-gray-700 mb-3"
                type="email"
                placeholder="Email Address*"
              />
            </div>
            <div className="mt-4">
              <CustomInput
                rules={{ ...requiredValidator }}
                name="admin_password"
                control={control}
                defaultValue={""}
                value={null}
                errors={errors}
                className="shadow w-6/12 border rounded  py-2 px-3 text-gray-700 mb-3"
                type="password"
                placeholder="Password*"
              />
            </div>
            <div className="mt-4 ">
              <CustomInput
                rules={{ ...requiredValidator }}
                name="apt_code"
                control={control}
                defaultValue={""}
                errors={errors}
                className="shadow w-6/12 border rounded  py-2 px-3 text-gray-700 mb-3"
                type="text"
                placeholder="Society code*"
              />
            </div>
            <div className="mt-4 flex">
              <input
                className="shadow border rounded w-2/12 py-2 px-3  text-gray-700 "
                id="captcha"
                type="text"
                placeholder="Captcha"
                value={captchaValue}
                onChange={handleInputChange}
                style={{
                  borderRadius: 37,
                }}
              />
              <input
                className="shadow border rounded w-2/12 py-2 px-3 ml-3 text-gray-700 bg-gray-200 "
                type="text"
                value={generatedCode}
                readOnly
                style={{
                  fontSize: 25,
                  fontWeight: 500,
                }}
              />
              
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded ml-5 w-1/12 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleRefreshCaptcha}
              >
                <i className="fa-solid fa-arrows-rotate text-white"></i>
              </button>
            </div>
            <div className="text-red-500 mt-2">{errorMessage}</div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-6/12 mt-8 focus:outline-none focus:shadow-outline"
              type="button"
              style={{
                borderRadius: 37,
              }}
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center w-6/12">
          {/* <div className="justify-center items-center">
            <img
              src={logogif}
              alt=""
              className="w-12/12 bg-gray-700"
              style={{
                borderRadius: "50%",
                backgroundImage: "cover",
                alignSelf: "center",
              }}
            />
            <div
              style={{ textAlign: "center", width: 350 }}
              className="mt-4 justify-center items-center"
            >
              <p style={{ fontWeight: 700, fontSize: 25 }}>
                Connect and create your ideal community
              </p>
              <p className="text-gray-400">
                From front door to shared spaces, build the community you dream
                of.
              </p>
            </div>
          </div> */}
          <Slider
          dots
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <div>
            <img
              src={logogif}
              alt=""
              className="w-12/12 bg-gray-700"
              style={{
                borderRadius: "50%",
                backgroundImage: "cover",
                alignSelf: "center",
              }}
            />
            <div
              style={{ textAlign: "center", width: 350 }}
              className="mt-4 justify-center items-center"
            >
              <p style={{ fontWeight: 700, fontSize: 25 }}>
                Connect and create your ideal community
              </p>
              <p className="text-gray-400">
                From the front door to shared spaces, build the community you
                dream of.
              </p>
            </div>
          </div>
          {/* Add more slides as needed */}
          
        </Slider>
        </div>
      </div>
      
    </>
  );
};
export default LoginView;

export interface LoginViewProps {
  loginAdmin: any;
}
