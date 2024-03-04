import Image from 'next/image';
import Shoe from "../assets/shoes-shoe-png-transparent-shoe.png";

const InnerBanner = () => {
    return(
        <div data-aos="fade-up"  className="py-4 w-full mt-8 pt-24 bg-main-blue min-h-40 h-full pb-24 px-2 flex justify-between">
            <div className="container mx-auto">
            <div className="grid grid-cols-2 p-16">
                <div className="max-w-[600px] mx-auto text-left"> 
                    <h2 data-aos="fade-up"  className="text-5xl text-white tracking-wide leading-normal	font-medium">Adidas Men Running Sneakers</h2>
                    <p data-aos="fade-up"  data-aos-delay="50" className="text-lg py-2 font-light text-white">Performance and design. Taken right to the edge.</p>
                    <a data-aos="fade-up" data-aos-delay="100"   href="#" className=" border-b-2 max-w-[60px] py-4 mt-8 mb-12 text-white text-left pb-2 uppercase pr-4">Shop Now</a>
                </div>
                <div data-aos="fade-up" className="relative z-10">
                    <Image className="absolute -top-3/4 w-full mx-auto" src={Shoe} alt="shoe" />
                </div>
            </div>
            </div>
          
        </div>
    )
}

export default InnerBanner;

