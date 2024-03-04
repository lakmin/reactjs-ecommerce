
import Image from 'next/image';
import Product1 from "../assets/product1.png";
import Icon1 from "../assets/refund.png";
import Icon2 from "../assets/shipping.png";
import Icon3 from "../assets/support.png";

const Search = () => {
    return(
        <div data-aos="fade-up" className="py-8  px-5 flex mb-16 justify-center mt-12  text-justify">
          <div className="container mx-auto content-center ">
            <div className="grid grid-cols-4 max-w-[360px] md:max-w-[500px] mx-auto justify-items-center ">
              <input type="text" className="col-span-3 border-2 w-full text-sm justify-self-center px-4   content-center" placeholder='Search' />
              <button className="justify-self-center text-white w-full justify-self-start p-2 bg-blue-400">Search</button>
            </div>
          </div> 
        </div>
    )
}

export default Search;