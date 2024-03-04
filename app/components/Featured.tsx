"use client";

import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import React , { useEffect, useState } from 'react';

const Featured = () => {

    const [loading, setLoading] =  useState(false);
    const [data, setData] = useState([]);
    const [filter, setFliter] = useState(data);
    let componentMounted = true;

    useEffect(() => {
        async function getfProducts(){
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products?limit=3')
                    .then(res=>res.json())
                    console.log("featured", response);

            if(componentMounted){
                setData(response);
                setFliter(response);
                setLoading(false);
            }

            return () => { 
                componentMounted = false;
            }

        }
        
        getfProducts();
  
    }, []);
    
    return(

        
          
          <div className="container mx-auto my-16 text-justify">

          <div className="max-w-[600px] mx-auto text-center"> 
                    <h2 data-aos="fade-up" className="text-4xl	tracking-normal
 my-4 uppercase poppins-bold font-bold">Featured Products</h2>
            </div>
            {loading ? <>Loading...</> : 

            <div className='product-list w-full grid grid-cols-3 gap-8 py-8'>

                {filter.map((fproduct: { title: string | number , image: any}) =>

                <div data-aos="fade-up" key={fproduct.id} className="product flex flex-row">  
                    <div className="px-4">
                        <Image  width={300} height={300} className="object-cover h-[130px] w-[130px]" src={fproduct.image} alt='product'/>
                    </div>
                    <div className="px-4 grow">
                        <h5 className="text-lg max-w-[200px] subpixel-antialiased font-light">{fproduct.title}</h5>
                        <div className="stars my-2 grid grid-cols-5 w-1/2 text-xs">
                            <FaStar className="text-[#FFC600]" />
                            <FaStar className="text-[#FFC600]"/>
                            <FaStar className="text-[#FFC600]"/>
                            <FaStar className="text-[#FFC600]"/>
                            <FaStar className="text-gray-300" />
                        </div>
                        <div className='flex my-2 gap-2'>
                            <h6 className="text-[#FB7181] text-lg">${fproduct.price}</h6>
                            <h6 className='line-through text-lg text-gray-300'>$534</h6>
                        </div>
                    </div>
                </div>
                 )}                
                
            </div>
}
          </div>
    )
}

export default Featured;