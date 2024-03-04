"use client";

import React from "react";
import bannerImage from "../assets/banner.png";
import Image from 'next/image';
import AOS from 'aos';
import "aos/dist/aos.css";


const Banner = () => {


    return(
        <div  
            data-aos="fade-up" 
            data-aos-easing="ease-in-out"
            className="grid content-center bg-cover h-screen relative bg-banner bg-fixed"
        >
            <Image src={bannerImage} className="w-full main-banner h-[90%]
             absolute top-0 bottom-0 z-0" alt="Banner" />
            <h3 data-aos="fade-up" className="tracking-wide ml-36 relative pb-16 z-1 leading-relaxed text-5xl font-bold text-white max-w-[450px]">Super Flash Sale
50% Off</h3>
        </div>
    );

}
export default Banner;