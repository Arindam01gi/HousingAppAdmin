import "./login.css";
import LoginView from "./LoginView";
import { connect } from "react-redux";
import { StoreState } from "../../../model/reduxModels";
import { LoginAction } from "../../../store/actions/adminAuthActions";
import { AdminLoginResponse } from "../../../model/adminAuthModel";

const Login = ({ LoginAction, admn_details }: LoginProps) => {
  const loginAdmin = () => {
    console.log("login button pressed");
    LoginAction({
      admin_email: "admin@msqube.com",
      admin_password: "12345",
      apt_code: "BA-700059-103efdds",
    });
  };
  console.log("Admin login resp: ", admn_details);
  return <LoginView loginAdmin={loginAdmin} />;
};

const mapStateToProps = (state: StoreState) => {
  return {
    admn_details: state.adminAuth.loginResponse,
  };
};
const mapDispatchToProps = {
  LoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

export interface LoginProps {
  LoginAction?: any;
  admn_details?: AdminLoginResponse;
}
