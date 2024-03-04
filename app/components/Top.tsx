
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import React , { useEffect, useState } from 'react';

import Link from 'next/link';

const Top = () => {

    return(
        <div className="container mx-auto">
            <div className="py-4 flex justify-between border-b-[1px] border-b-slate-300">
                <div className="flex p-2">
                    <select name="" id="" className="mr-2">
                        <option value="">EN</option>
                        <option value="">GR</option>
                    </select>
                    <select name="" id="">
                        <option value="">USD</option>
                        <option value="">AED</option>
                    </select>
                </div>
            <div className="p-2 flex flex-row gap-4">
                <a href="#" className="flex"><FaRegUser className="text-lg mr-2" />
                 <p className="">My Profite</p></a>
                <Link href="/cart" className="flex relative">
                    <IoCartOutline className="text-2xl mr-4" /> 
                    <span className="rounded-full left-2 absolute -top-3 h-6 pt-1 bg-red-400 text-white  text-xs px-2">2</span>
                     <p className="">Items</p> </Link>
                <div className="flex flex-row">
                    <p>$0.00</p>
                    <IoMdSearch className="text-2xl ml-2"  />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Top;