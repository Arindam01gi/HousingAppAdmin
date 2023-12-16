import { connect } from "react-redux";
import { StoreState } from "../../../model/reduxModels";
import DashboardView from "./DashboardView";
import { UserLogoutSuccess } from "../../../store/actions/adminAuthActions";
import { GetNotice } from "../../../store/actions/adminActions";
import { useEffect } from "react";

const SocietyAdminDashboard = ({UserLogoutSuccess,GetNotice,notices}:SocietyAdminDashboardProps) => {
    const handleLogout = () => {
        UserLogoutSuccess();
    }
    useEffect(() => {
      GetNotice()
    },[])

    console.log("Notices: ",notices)
    return(
        <DashboardView handleLogout={handleLogout}></DashboardView>
    )
}
const mapStateToProps = (state: StoreState) => {
    return {
      admn_details: state.adminAuth.loginResponse,
      notices: state.admin.notices
    };
  };
  const mapDispatchToProps = {
    UserLogoutSuccess,
    GetNotice
  };
export default connect(mapStateToProps, mapDispatchToProps)(SocietyAdminDashboard);

interface SocietyAdminDashboardProps{
    UserLogoutSuccess:any
    GetNotice:any
    notices:any
}