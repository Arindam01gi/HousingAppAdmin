import profile from "../../../assets/images/profile.jpg";
const DashboardView = ({ handleLogout,permissions }: DashboardViewProps) => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="shadow-xl z-40 col-span-2">
        <div className="flex justify-between items-center px-3 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-3  h-14">
          <span className="font-medium">Neighbourhood</span>
          <i className="fa-solid fa-bars text-white"></i>
        </div>
        <div className="flex flex-col">
          {permissions && permissions.length > 0 ?(
            <ul>
              {permissions.map((permission:any,index:string)=>(
                <li key={`${index}-actions`} className="py-2 pl-4 cursor-pointer hover:bg-cyan-500 hover:text-white">
                <i className="fa-solid fa-caret-right mr-2"></i>
                {permission}
              </li>
              ))}
            </ul>
          ):
          <li>No action available</li>
          }
        </div>
      </div>
      <div className="shadow-xl bg-gray-50 col-span-10 ">
        <div className=" flex justify-between px-4 items-center text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-2 h-14">
          <div className="flex justify-between w-4/12 ">
            <i className="fa-solid fa-magnifying-glass text-white mt-2"></i>
            <div>
              <h6>
                <span className="mr-2">
                  <i className="fas fa-house"></i>
                </span>
                Society Name
              </h6>
            </div>
            <div>Society Code </div>
          </div>
          <div className="flex flex-row">
            <img
              src={profile}
              className="rounded-full"
              alt="profile image"
              width="40"
              height="25"
            />
            <div className="flex flex-col mx-2">
              <span className="text-sm font-medium">Mainak Das</span>
              <span className="text-sm">+91 7001824751</span>
            </div>
            <div
              className="justify-center"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              <span className="text-sm font-medium ml-10">Logout</span>
              <i className="fa-solid ml-2 fa-right-from-bracket text-white"></i>
            </div>
          </div>
        </div>
        <div className="m-4 h-[100px] shadow-lg">
          <div className="flex justify-center font-bold">
            Analytics Dashboard
          </div>
        </div>
        <div className="m-4 h-[70px] flex ">
          <div
            className="w-4/12 shadow-lg rounded-lg"
            style={{ backgroundColor: "#414E78" }}
          ></div>
          <div className="w-4/12 shadow-lg ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"></div>
          <div className="w-4/12 shadow-lg ml-4 bg-emerald-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
export default DashboardView;
interface DashboardViewProps {
  handleLogout: any;
  permissions: any;
}
