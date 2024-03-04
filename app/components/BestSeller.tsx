"use client";

import Image from 'next/image';
import React , { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


const BestSeller = () => {

    AOS.init();

    const [data, setData] = useState([]);
    const [filter, setFliter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    
    let componentMounted = true;
    
     const handleCategoryClick = (id: any) => {
            setSelectedCategory(id)
            console.log("category_id",id);
            
        }

    useEffect(() => {
        async function getProducts(){

            console.log("selectedCategory", selectedCategory);
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${selectedCategory}?limit=8`)
                    .then(res=>res.json())
            console.log("response", response);
            if(componentMounted){
                setData(response);
                setFliter(response);
                setLoading(false);
                console.log(filter);
            }

            return () => { 
                componentMounted = false;
            }

        }
        
        getProducts();
  
    }, []);
    
   
       

    return(
        <div  className="py-8 px-2 relative mt-6 text-justify">
          <div className="container mx-auto">
            <div className="max-w-[600px] mx-auto text-center"> 
                <h2 data-aos="fade-up"  className="text-4xl	uppercase tracking-normal poppins-bold font-bold">Best Sellers</h2>
                <div className=' text-center text-wrap mx-auto'>
               
                    <ul className="justify-center py-8 mb-8 flex text-xl mx-auto gap-16">
                        <li>
                            <button data-aos="fade-up" onClick={() => handleCategoryClick('')}>All</button>
                        </li>
                        <li>
                            <button data-aos="fade-up" onClick={() => handleCategoryClick('jewelery')}>Bags</button>
                        </li>
                        <li>
                            <button data-aos="fade-up" onClick={() => handleCategoryClick('')}>Sneakers</button>
                        </li>
                        <li>
                            <button data-aos="fade-up" onClick={() => handleCategoryClick('jewelery')}>Belt</button>
                        </li>
                        <li>
                            <button data-aos="fade-up" onClick={() => handleCategoryClick('')}>Sunglasses</button>
                        </li>
                    </ul>
                </div>
            </div>


            {loading ? <>Loading...</> : 
            <div className='product-list grid grid-cols-4 gap-4'>
                {filter.map((product: { title: string | number, price: any }) =>
                <div data-aos="fade-up" className="product   mb-6 p-4">
                    <div className="shadow-md relative pb-4" key={product.id}>
                        <div className="w-full flex items-center h-full min-h-[450px]">
                            <Image src={ product.image} width={500} height={500} className="p-12 max-h-[450px] size-fit w-full" alt='product'/>
                        </div>
                        <div className='text-center border-1'>
                            <h5 className=" mt-2 mb-6 px-4 font-bold min-h-[60px]">{product.title}</h5>
                            <div className='grid text-sm grid-cols-3 mx-auto my-4 w-full'>
                                <h6 className="font-bold text-main-blue">${product.price}</h6>
                                <h6 className='line-through text-gray-400'>$534,33</h6>
                                <span className=" font-bold text-[#FB7181]">24% Off</span>
                            </div>
                        </div> 
                        <div className="show-on-hover grid content-center  opacity-0 transition duration-300 ease-in-out hover:opacity-900  bg-white shadow	 hover:bg-red absolute top-8 bottom-8 left-8 right-8 z-10">
                            <div className="grid content-center mx-auto max-w-[200px] grid-cols-2 gap-8 justify-items-center">
                                <div className='self-center hover:text-white hover:bg-red-400 justify-self-center border-[1px] p-2 rounded-full'>
                                <FaRegHeart />

                                </div>
                                <div className='self-center  hover:text-white  hover:bg-red-400 justify-self-center border-[1px] p-2 rounded-full'>
                                    <IoCartOutline />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 )}                
            </div>
            }
          </div>
        </div>
    )
}

export default BestSeller;