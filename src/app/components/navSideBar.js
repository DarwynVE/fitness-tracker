const setBorder = () => {
    console.log("Border Set!");
    
}

export default function NavSideBar() {
    return (

    <div className="grid justify-items-center w-80 h-full fixed bg-gray-100 absolute">
        <div className="w-60 h-60">
            <ul className="mt-40">
                <li className="cursor-pointer w-50 text-center bg-white mt-8 pt-2 pb-2 border-gray-500 rounded-full hover:outline">Home</li>
                <li className="cursor-pointer w-50 text-center bg-white mt-8 pt-2 pb-2 border-gray-500 rounded-full hover:outline">Workout Entry</li>
                <li className="cursor-pointer w-50 text-center bg-white mt-8 pt-2 pb-2 border-gray-500 rounded-full tranistion ease-in-out hover:shadow-md hover: duration-200">Workout History</li>
                <li className="cursor-pointer w-50 text-center bg-white mt-8 pt-2 pb-2 border-gray-500 rounded-full hover:outline">Settings</li>
            </ul>
        </div>
    </div>
    )
}