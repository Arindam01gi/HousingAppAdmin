import profile from "../../../assets/images/profile.jpg";
const DashboardView = () => {
    return(
        <div className="grid grid-cols-12 h-screen">
        <div className="shadow-xl z-40 col-span-2">
            <div className="flex justify-between items-center px-3 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-3  h-14">
                <span className="font-medium">Neighbourhood</span>
                <i className="fa-solid fa-bars text-white"></i>
            </div>
         </div>
        <div className="shadow-xl bg-gray-50 col-span-10 ">
            <div className=" flex justify-between px-4 items-center text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-2 h-14">
                <div>
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </div>
                <div className="flex flex-row">
                    <img src={profile} className="rounded-full" alt="profile image" width="40" height="25" />
                    <div className="flex flex-col mx-2">
                        <span className="text-sm font-medium">Mainak Das</span>
                        <span className="text-sm">+91 7001824751</span>
                    </div>
                    <div className="justify-center">
                        <span className="text-sm font-medium ml-10">Logout</span>
                        <i className="fa-solid ml-2 fa-right-from-bracket text-white"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default DashboardView;