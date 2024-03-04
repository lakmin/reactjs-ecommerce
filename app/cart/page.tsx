"use client"; 
import Image from 'next/image';

import Nav from "../components/Nav";
import Top from "../components/Top";
import Search from "../components/Search";
import Footer from "../components/Footer";

import React , { useEffect, useState } from 'react';


async function getCarts(){
  const response = await fetch('https://fakestoreapi.com/products?limit=5')
          .then(res=>res.json())
  return response;
}

export default function Cart() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    async function getProducts(){
      setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products?limit=2')
                .then(res=>res.json())
        console.log("response", response);
        if(componentMounted){
            setData(response);
            setLoading(false);

        }

        return () => { 
            componentMounted = false;
        }

    }
    
    getProducts(); 
}, []);
  

  return (
      <div className="bg-white-500">
        <Top /> 
        <Nav />

        <div>
          <div className=" bg-gray-100 p-4">
            <div className="container mx-auto">
              <ul className="flex justify-center text-sm items-stretch">
                <li className="mr-2 text-blue-400">Home</li>
                <li className="mr-2  text-blue-400">/ Hot Deal</li>
                <li>/ Nike Airmax 270 React</li>
              </ul>
            </div>
          </div>


          <div className="container mx-auto">
            {loading ? <>Loading...</> : 

            <div className="table w-full">
              <div className="grid justify-items-center grid-cols-5 gap-4 p-6 border-t-[1px]">
                <div className="col-span-2 uppercase">Product</div>
                <div className="uppercase">Price</div>
                <div className="uppercase">QTY</div>
                <div className="uppercase">unit Price</div>
              </div>
              
              {data.map((cart: { title: string, image: any, price: any  }) =>


                <div className="grid grid-cols-5 gap-4 p-6 border-t-[1px]">
                

                <div className="flex  col-span-2 items-center">
                  <div className="close">
                    <button className='px-2 bg-gray-200 text-red-300 mr-8 text-sm'>X</button>
                  </div>
                  <Image src={ cart.image} width={300} height={300} className="object-cover h-24 w-24" alt='product'/>
                  <div className='ml-4 font-light'>{cart.title}</div>
                </div>
                <div className="place-self-center">${cart.price}</div>
                <div className="place-self-center"> 
                <select name="" id="" className="mr-2">
                          <option value="">1</option>
                          <option value="">2</option>
                      </select>
                </div>
                <div className="place-self-center">${cart.price}</div>
                </div>


              )  }
              
          
          

              

            </div>
            }

          </div>


        </div>
      
        <div className="checkout my-8 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 border-t-[1px] pt-16">
            <div className="col-span-2">
              <div className="grid grid-cols-4 max-w-[360px] md:max-w-[320px] justify-items-left ">
                <input type="text" className="col-span-3 border-2 w-full text-sm justify-self-center px-4" placeholder='Voucher code' />
                <button className="justify-self-center text-white w-full uppercase p-2 bg-blue-400">redeem</button>
            </div>
            </div>
            <div className="table">
              <div className="grid py-2 grid-cols-2">
                <div className="font-light">Subtotal</div>
                <div className="font-light">$998</div>
              </div>

              <div className="grid py-2 grid-cols-2">
                <div className="font-light">Shipping fee</div>
                <div className="font-light">$20</div>
              </div>

              <div className="grid py-2 grid-cols-2">
                <div className="font-light">Coupon</div>
                <div className="font-light">$998</div>
              </div>

              <div className="grid py-4 border-t-[1px] grid-cols-2">
                <div><h4 className="text-xl"> Total</h4></div>
                <div className="text-xl">$998</div>
              </div>

              <button className="justify-self-center mt-4 block text-white w-full uppercase p-2 bg-blue-400">Checkout</button>

            </div>
          </div>
        </div>
        </div>
        
        
        <Footer/>
      </div>
  );
}
