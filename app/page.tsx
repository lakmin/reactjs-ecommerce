
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Top from "./components/Top";
import BestSeller from "./components/BestSeller";
import InnerBanner from "./components/InnerBanner";
import Icons from "./components/Icons";
import Featured from "./components/Featured";
import Search from "./components/Search";
import Footer from "./components/Footer";
   


export default function Home() {

  // const getProducts = () => {
  //   axios.get("https://fakestoreapi.com/products").then(
  //       res => {
  //           console.log(res);
  //       }).catch(err =>
  //           {
  //               console.log(err);
  //           }
  //       ) 
  // }

  // getProducts();
  // console.log("loading");
  return (
      <div className="bg-white-500">
        <Top /> 
        <Nav />
        <Banner />
        <BestSeller />
        <InnerBanner />
        <Icons />
        <Featured />
        <Search />
        <Footer/>
      </div>
  );
}
