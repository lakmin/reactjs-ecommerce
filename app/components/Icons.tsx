
import Image from 'next/image';
import Product1 from "../assets/product1.png";
import Icon1 from "../assets/refund.png";
import Icon2 from "../assets/shipping.png";
import Icon3 from "../assets/support.png";

const Icons = () => {
    return(          
          <div className="container mx-auto my-36">

          <div className="grid space-x-4 justify-items-center grid-cols-3 text-center">
         
          <div data-aos="fade-up">
            <Image className='mx-auto mb-4' src={Icon2} alt=''/>
            <h4 className="text-lg my-6">
            FREE SHIPPING
            </h4>
          </div>
          <div  data-aos-delay="50"  data-aos="fade-up">
            <Image className='mx-auto mb-4' src={Icon1} alt="FREE SHIPPING"/>
            <h4 className="text-lg my-6">
            100% REFUND
            </h4>
          </div>
          <div  data-aos-delay="100"  data-aos="fade-up">
            <Image className='mx-auto mb-4' src={Icon3} alt=''/>
            <h4 className="text-lg my-6">
            SUPPORT 24/7
            </h4>
          </div>
          </div>
          </div>
    )
}

export default Icons;