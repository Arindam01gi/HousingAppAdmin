import "./login.css";
import LoginView from "./LoginView";
import { connect } from "react-redux";
import { StoreState } from "../../../model/reduxModels";
import { LoginAction } from "../../../store/actions/adminAuthActions";
import { AdminLoginResponse } from "../../../model/adminAuthModel";
import { useNavigate } from "react-router-dom";

const Login = ({ LoginAction, admn_details }: LoginProps) => {
  const navigate = useNavigate();
  const loginAdmin = (data:any) => {
    LoginAction(data,navigate);
  };
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
