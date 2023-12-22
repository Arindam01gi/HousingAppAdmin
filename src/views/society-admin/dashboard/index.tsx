import { connect } from "react-redux";
import { StoreState } from "../../../model/reduxModels";
import DashboardView from "./DashboardView";
import { UserLogoutSuccess } from "../../../store/actions/adminAuthActions";
import { GetNotice } from "../../../store/actions/adminActions";
import { useEffect } from "react";

const SocietyAdminDashboard = ({UserLogoutSuccess,GetNotice,notices,permissions}:SocietyAdminDashboardProps) => {
    const handleLogout = () => {
        UserLogoutSuccess();
    }
    useEffect(() => {
      GetNotice()
    },[])

    console.log("Notices: ",notices)
    console.log("permissions",permissions)
    return(
        <DashboardView handleLogout={handleLogout} permissions={permissions} ></DashboardView>
    )
}
const mapStateToProps = (state: StoreState) => {
    return {
      admn_details: state.adminAuth.loginResponse,
      notices: state.admin.notices,
      permissions: state.adminAuth.loginResponse?.permissions[0].action_items
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
    permissions:any
}