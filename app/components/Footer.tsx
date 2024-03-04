
import Image from 'next/image';
import Cards from "../assets/cards.png";
import logo from '../assets/Icon.png';

const Footer = () => {
    return(
        <div  className="py-8 px-2 bg-[#BCDDFE] mt-12 text-justify">
          <div className="container mx-auto">
                <div data-aos="fade-up" className="flex gap-8 py-12  justify-around flex-row">
                    <div className="flex-2 col-span-2 max-w:[200]">
                        <div className="flex logo items-center flex-row content-center align-middle">
                            <Image src={logo} alt="logo"></Image>
                            <h6 className="ml-2 font-bold text-lg">E-Comm</h6>
                        </div>
                        
                        <p className="leading-normal text-left text-sm mt-4 max-w-[300px] font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                    </div>
                    <div>
                        <h4 className="text-lg">Follow  Us</h4>
                        <p className="leading-normal text-left text-sm mt-4 max-w-[250px] font-light">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    </div>
                    <div className="flex-none">
                        <h4 className="text-lg">Contact Us</h4>
                        <div className="leading-normal text-left text-sm mt-4 max-w-[150px] font-light">
                        E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                        </div>
                    </div>
                </div>
                <div className="flex py-24 justify-around flex-row">
                    <div data-aos-delay="50" data-aos="fade-up" className="font-light leading-relaxed">
                        <h4 className="text-xl mb-8">Information</h4>
                        <div>
                            <ul>
                                <li> <a href="">About Us</a></li>
                                <li> <a href="">Infomation</a></li>
                                <li> <a href="">Privacy Policy</a></li>
                                <li> <a href="">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos-delay="100" data-aos="fade-up" className="font-light">
                    <h4 className="text-xl mb-8">Service</h4>
                        <div>
                        <ul>
                          <li> <a href="">About Us</a></li>
                            <li> <a href="">Infomation</a></li>
                            <li> <a href="">Privacy Policy</a></li>
                            <li> <a href="">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    </div>
                    <div data-aos-delay="150" data-aos="fade-up" className="font-light">
                        <h4 className="text-xl mb-8">My Account</h4>
                        <div>
                            <ul>
                                <li> <a href="">About Us</a></li>
                                <li> <a href="">Infomation</a></li>
                                <li> <a href="">Privacy Policy</a></li>
                                <li> <a href="">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos-delay="200" data-aos="fade-up" className="font-light">
                    <h4 className="text-xl mb-8">Our Offers</h4>

                        <div>
                            <ul>
                                <li> <a href="">About Us</a></li>
                                <li> <a href="">Infomation</a></li>
                                <li> <a href="">Privacy Policy</a></li>
                                <li> <a href="">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div  className="border-t-2 grid py-4  grid-cols-2">
                    <div className='justify-self-start'>
                        <p className="text-gray-800 text-sm">© 2024 Ecommerce </p>
                    </div>
                    <div className='justify-self-end'>
                        <Image src={Cards} alt=''></Image>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Footer;