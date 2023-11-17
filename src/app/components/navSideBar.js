const setBorder = () => {
    console.log("Border Set!");
    
}

export default function NavSideBar() {
    return (

    <div className="grid justify-items-center w-80 h-full fixed bg-gray-100 absolute border-r-4 border-gray-200">
        <div className="w-60 h-60">
            <ul className="mt-40">
                <li className="cursor-pointer w-50 text-center bg-white mt-8 pt-2 pb-2 border-gray-500 rounded-full tranistion ease-in-out hover:shadow-md hover:shadow-indigo-200 duration-200">Home</li>
                <li className="cursor-pointer w-50 text-center bg-white mt-8 pt-2 pb-2 border-gray-500 rounded-full tranistion ease-in-out hover:shadow-md hover:shadow-indigo-200 duration-200">Workout Entry</li>
                <li className="cursor-pointer w-50 text-center bg-white mt-8 pt-2 pb-2 border-gray-500 rounded-full tranistion ease-in-out hover:shadow-md hover:shadow-indigo-200 duration-200">Workout History</li>
                <li className="cursor-pointer w-50 text-center bg-white mt-8 pt-2 pb-2 border-gray-500 rounded-full tranistion ease-in-out hover:shadow-md hover:shadow-indigo-200 duration-200">Settings</li>
            </ul>
        </div>
    </div>
    )
}