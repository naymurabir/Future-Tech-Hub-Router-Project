import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1, HiMenuAlt4 } from 'react-icons/hi';
import './Header.css'

const Header = () => {

    const [open, setOpen] = useState(false)

    const handleDropDown = () => {
        setOpen(!open)
    }

    return (

        <nav className="bg-green-700 text-white px-4 py-2 shadow-md ">

            <div className="flex justify-between items-center">

                <div className="">
                    <h2 className="text-xl font-semibold text-white">Future Tech Hub</h2>
                </div>

                <div className="relative" >
                    <div className={`flex flex-col md:flex-row absolute md:static duration-1000 bg-green-700 px-4 py-3 text-white ${open ? 'top-5 left-3 z-10' : 'left-3  -top-40'}`}>

                        <NavLink className="mr-4 text-xl font-semibold" to="/">Home</NavLink>

                        <NavLink className="mr-4 text-xl font-semibold" to="/products"> Products</NavLink>

                        <NavLink className="mr-4 text-xl font-semibold" to="/about">About</NavLink>

                        <NavLink className="mr-4 text-xl font-semibold" to="/contact">Contact</NavLink>

                    </div>
                </div>

                <div onClick={handleDropDown} className="md:hidden text-xl">
                    {
                        open ? <HiOutlineMenuAlt1></HiOutlineMenuAlt1> : <HiMenuAlt4></HiMenuAlt4>
                    }
                </div>

            </div>
        </nav>

    );
};

export default Header;