const DashboardView = () => {
    return(
        <div className="grid grid-cols-12 h-screen">
        <div className="shadow-xl z-40 col-span-2">
            <div className="flex justify-between items-center px-3 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-3">
                <span className="font-medium">Neighbourhood</span>
                <i className="fa-solid fa-bars text-white"></i>
            </div>
         </div>
        <div className="shadow-xl bg-gray-50 col-span-10">
            <div className=" flex items-center text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-3">
                <div>
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </div>
            </div>
        </div>
        </div>
    )
}
export default DashboardView;